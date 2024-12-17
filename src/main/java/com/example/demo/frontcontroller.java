package com.example.demo;

import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class frontcontroller {

	@Autowired
	userdao dao;

	@RequestMapping("register")
	public int registration(@RequestBody User user) {

		System.out.println(user);

		int num = dao.register(user);

		System.out.println(num);

		return num;
	}

	@RequestMapping("update")
	public int update(@RequestBody Map<String, String> data) {

		String name = data.get("name");
		String cpassword = data.get("cpassword");
		String npassword = data.get("npassword");

		int num = dao.update(name, cpassword, npassword);

		return num;
	}

	@RequestMapping("delete")
	public int delete(@RequestBody Map<String, String> data) {

		String name = data.get("name");
		String password = data.get("password");

		int num = dao.delete(name, password);

		return num;
	}

	@GetMapping("login")
	public User login(@RequestParam String name, String password) {

		User user = dao.login(name, password);

		System.out.println(user);
		System.out.println("login controller");

		if(user!=null)
		{
			return user;

		}else
		{
			return null;
		}
	}

}
