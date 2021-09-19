package com.springboot.app.controller;


import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.app.exception.ResourceNotFoundException;
import com.springboot.app.model.Register;
import com.springboot.app.repository.RegisterReository;

@CrossOrigin(origins = "http://localhost:3000")
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

	//add user REST API
	@PostMapping("/users")
	public Register addUser(@RequestBody Register register) {
		return registerReository.save(register);
	
	}
	
	
	
}
