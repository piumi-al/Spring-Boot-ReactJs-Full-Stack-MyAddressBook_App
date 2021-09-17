package com.springboot.app.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.app.model.Register;
import com.springboot.app.repository.RegisterReository;

@RestController
@RequestMapping("/api/v1/")
public class RegisterController {
	
	@Autowired
	 private RegisterReository registerReository;
	
	//get all Registered Users
	@GetMapping("/users")
    public List<Register> getAllRegisteredUsers(){
		return registerReository.findAll();
	
	}
}
