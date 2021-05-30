package com.api.o2Suppliers.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.api.o2Suppliers.model.UserDetails;

public interface UserRepository extends CrudRepository<UserDetails, Integer>{

	UserDetails findByEmail(String email);
	
	UserDetails findById(int id);
	
	List<UserDetails> findAll();
}
