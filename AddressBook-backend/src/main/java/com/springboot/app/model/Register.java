package com.springboot.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="register_tb")
public class Register {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name ="name")
	private String name;
	
	@Column(name ="age")
	private int age;
	
	@Column(name ="dob")
	private String dob;
	
	@Column(name ="mobile")
	private String mobile;
	
	@Column(name ="address")
	private String address;
	

	
	public Register() {
		
	}


	public Register(String name, int age, String dob, String mobile, String address) {
		super();
		this.name = name;
		this.age = age;
		this.dob = dob;
		this.mobile = mobile;
		this.address = address;
	}
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	
	
	

}
