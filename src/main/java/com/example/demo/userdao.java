package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

@Repository
public class userdao {

	@Autowired
	JdbcTemplate template;

	public int register(User user) {

	

		int num = template.update("insert into user values(?,?,?,?)", user.getName(), user.getRollno(), user.getEmail(),
				user.getPassword());

		if (num > 0) {
			System.out.println("registration suucessfull");
		} else {
			System.out.println("registartion failed");
		}
		return num;
	}

	public int update(String name, String cpassword, String npassword) {

		int num = template.update("update user set password=? where name=? and password = ?", npassword, name,
				cpassword);

		if (num > 0) {
			System.out.println("update success");
		} else {
			System.out.println("update fail");
		}
		return num;
	}

	public int delete(String name, String password) {

		int num = template.update("delete from user where name=? and password=?", name, password);

		if (num > 0) {
			System.out.println("delete successful");
		} else {
			System.out.println("delete fail");
		}
		return num;
	}

	public User login(String name, String password) {

		RowMapper<User> row = new Rowmapperimpl();
		try {
			User user = template.queryForObject("select * from user where name=? and password=?", row, name, password);
			return user;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}

	}

}
