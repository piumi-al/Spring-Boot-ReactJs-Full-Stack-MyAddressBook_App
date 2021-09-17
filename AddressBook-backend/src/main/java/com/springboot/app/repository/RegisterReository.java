package com.springboot.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.app.model.Register;

@Repository
public interface RegisterReository extends JpaRepository<Register, Long>{
	
	
	
	

}
