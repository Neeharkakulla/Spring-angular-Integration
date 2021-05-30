package com.api.o2Suppliers.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.api.o2Suppliers.model.DoctorModel;

public interface DoctorRepository extends CrudRepository<DoctorModel, Integer> {

	DoctorModel findByEmail(String email);
	List<DoctorModel> findAll();

}
