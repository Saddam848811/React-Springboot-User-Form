package com.example.demo;

public class User {

	String name;
	int rollno;
	String email;
	String password;

	

	public User() {

	}

	public User(String name, int rollno, String email, String password) {

		this.name = name;
		this.rollno = rollno;
		this.email = email;
		this.password = password;
	
	}

	@Override
	public String toString() {
		return "User [name=" + name + ", rollno=" + rollno + ", email=" + email + ", password=" + password + "]";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getRollno() {
		return rollno;
	}

	public void setRollno(int rollno) {
		this.rollno = rollno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
