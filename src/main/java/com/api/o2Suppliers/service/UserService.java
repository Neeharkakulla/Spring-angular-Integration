package com.api.o2Suppliers.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.o2Suppliers.dao.DoctorRepository;
import com.api.o2Suppliers.dao.SupplierRepository;
import com.api.o2Suppliers.dao.UserRepository;
import com.api.o2Suppliers.model.DoctorModel;
import com.api.o2Suppliers.model.SupplierModel;
import com.api.o2Suppliers.model.UserDetails;

@Service
public class UserService {
	@Autowired
	UserRepository userrepo;
	@Autowired
	DoctorRepository doctorrepo;
	@Autowired
	SupplierRepository supplierrepo;
	public UserDetails registerUser(UserDetails user) {
		user.setStatus(true);
		return userrepo.save(user);
	}
	public UserDetails validateUser(UserDetails user) {
		UserDetails dbuser=userrepo.findByEmail(user.getEmail());
		
		if(dbuser!=null
				&&dbuser.getPassword().equals(user.getPassword())
				&&dbuser.getRole().equalsIgnoreCase("user")&&dbuser.isStatus()) 
		{
			dbuser.setPassword("");
			return dbuser;
		}
		return null;
	}
	public UserDetails validateAdmin(UserDetails admin) {
		UserDetails dbuser=userrepo.findByEmail(admin.getEmail());
		if(dbuser!=null
				&&dbuser.getPassword().equals(admin.getPassword())
				&&dbuser.getRole().equalsIgnoreCase("admin")&&dbuser.isStatus()) 
		{
			dbuser.setPassword("");
			return dbuser;
		}
		return null;
	}
	public DoctorModel validateDoctor(UserDetails doctor) {
		DoctorModel dbuser=doctorrepo.findByEmail(doctor.getEmail());
		
		if(dbuser!=null
				&&dbuser.getPassword().equals(doctor.getPassword())
				&&dbuser.getRole().equalsIgnoreCase("doctor")&&dbuser.isStatus()) 
		{
			dbuser.setPassword("");
			return dbuser;
		}
		return null;
	}
	
	public SupplierModel validateSupplier(UserDetails supplier) {
		SupplierModel dbuser=supplierrepo.findByEmail(supplier.getEmail());
		if(dbuser!=null
				&&dbuser.getPassword().equals(supplier.getPassword())
				&&dbuser.getRole().equalsIgnoreCase("supplier")&&dbuser.isStatus()) 
		{
			dbuser.setPassword("");
			return dbuser;
		}
		return null;
	}
	public UserDetails getUserWithId(int id) {
		UserDetails user=userrepo.findById(id);
		return user;
	}
	public boolean validatePasswordUser(String email,String password) {
		UserDetails dbuser=userrepo.findByEmail(email);
		
		if(dbuser!=null&&dbuser.getPassword().equals(password)) {
			
			return true;
		}
		return false;
		
	}
	public void updateUser(UserDetails user) {

		userrepo.save(user);
		
	}
	public DoctorModel saveDoctor(DoctorModel doctor) {
		doctor.setStatus(true);
			return doctorrepo.save(doctor) ;
	}
	
	public SupplierModel saveSupplier(SupplierModel supplier) {
		supplier.setStatus(true);
		return supplierrepo.save(supplier);
	}
	public List<DoctorModel> getAllDoctors() {
		
		return doctorrepo.findAll();
	}
    public List<UserDetails> getAllUsers() {
		
		return userrepo.findAll();
	}
	public List<SupplierModel> getAllSuppliers() {
			return supplierrepo.findAll();
	}
	public boolean validatePasswordDoctor(String email, String password) {
	DoctorModel dbuser=doctorrepo.findByEmail(email);
		
		if(dbuser!=null&&dbuser.getPassword().equals(password)) {
			
			return true;
		}
		return false;
	
	}
	public void updateDoctor(DoctorModel doctor) {
		
		doctorrepo.save(doctor);
	}
	public boolean validatePasswordSupplier(String email, String password) {
		SupplierModel dbuser=supplierrepo.findByEmail(email);
		
		if(dbuser!=null&&dbuser.getPassword().equals(password)) {
			
			return true;
		}
		return false;
	
	}
	public void updateSupplier(SupplierModel supplier) {
		supplierrepo.save(supplier);
	}
	public void blockUser(UserDetails user) {
		user.setStatus(false);
		userrepo.save(user);
		
	}
	public void unblockUser(UserDetails user) {
		user.setStatus(true);
		userrepo.save(user);
		
	}
	public void blockDoctor(DoctorModel doctor) {
		doctor.setStatus(false);
		doctorrepo.save(doctor);
		
	}
	public void unblockDoctor(DoctorModel doctor) {
		doctor.setStatus(true);
		doctorrepo.save(doctor);
				
	}
	public void blockSupplier(SupplierModel supplier) {
		supplier.setStatus(false);
		supplierrepo.save(supplier);
	}
	public void unblockSupplier(SupplierModel supplier) {
		supplier.setStatus(true);
		supplierrepo.save(supplier);
		
	}
   

}
