package com.example.demo;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.Nullable;

public class Rowmapperimpl implements RowMapper<User> {

	@Override
	@Nullable
	public User mapRow(ResultSet rs, int rowNum) throws SQLException {

		User user = new User();
		user.setName(rs.getString(1));
		user.setRollno(rs.getInt(2));
		user.setEmail(rs.getString(3));
		user.setPassword(rs.getString(4));

		
		return user;
	}

}
