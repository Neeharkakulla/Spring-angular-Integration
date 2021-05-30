package com.api.o2Suppliers.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.api.o2Suppliers.model.SupplierModel;

public interface SupplierRepository extends CrudRepository<SupplierModel, Integer>{

	SupplierModel findByEmail(String email);

	List<SupplierModel> findAll();
}
