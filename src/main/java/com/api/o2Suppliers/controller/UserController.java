package com.api.o2Suppliers.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.o2Suppliers.model.DoctorModel;
import com.api.o2Suppliers.model.SupplierModel;
import com.api.o2Suppliers.model.UserDetails;
import com.api.o2Suppliers.service.UserService;

@RestController

@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	UserService userService;


//admin mapping

	@PostMapping("/admin/login")
	public UserDetails loginAdmin(@RequestBody UserDetails admin) {
		
		
		return userService.validateAdmin(admin);
	}
	
//users mapping
	
	@PostMapping("/user/register")
	public boolean registerUser(@RequestBody UserDetails user) {
		
		if(user.getRole().equalsIgnoreCase("admin"))
			return false;
		if(userService.registerUser(user)!=null)
			return true;
		return false;
	}
	 
	@PostMapping("/user/login")
	public UserDetails loginUser(@RequestBody UserDetails user) {
	
		return userService.validateUser(user);
	}
		@PostMapping("/validate/{email}")
	public boolean validatePasswordUser(@PathVariable("email")String email,@RequestBody String password) {
		
		return userService.validatePasswordUser(email,password);
	}
	
	@PostMapping("/newpassword")
	public void changePasswordUser(@RequestBody UserDetails user) {
		userService.updateUser(user);
	}
	
	@GetMapping("/getAll")
	public List<UserDetails> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@PostMapping("/user/block")
	public List<UserDetails> blockUser(@RequestBody UserDetails user){
		userService.blockUser(user);
		return userService.getAllUsers();
	}
	@PostMapping("/user/unblock")
	public List<UserDetails> unblockUser(@RequestBody UserDetails user){
		userService.unblockUser(user);
		return userService.getAllUsers();
	}

//doctor mapping
	
	@PostMapping("/doctor/register")
	public DoctorModel registerDoctor(@RequestBody DoctorModel doctor) {
		
		return userService.saveDoctor(doctor);
	}
	

	@GetMapping("/doctor/getAll")
	public List<DoctorModel> getAllDoctors(){
		return userService.getAllDoctors();
	}
	
		
	@PostMapping("/doctor/validate/{email}")
	public boolean validatePasswordDoctor(@PathVariable("email")String email,@RequestBody String password) {
		
		return userService.validatePasswordDoctor(email,password);
	}
	
	@PostMapping("/doctor/newpassword")
	public void changePasswordDoctor(@RequestBody DoctorModel doctor) {
		userService.updateDoctor(doctor);
	}
	@PostMapping("/doctor/block")
	public List<DoctorModel> blockDoctor(@RequestBody DoctorModel doctor){
		userService.blockDoctor(doctor);
		return userService.getAllDoctors();
	}
	@PostMapping("/doctor/unblock")
	public List<DoctorModel> unblockDoctor(@RequestBody DoctorModel doctor){
		userService.unblockDoctor(doctor);
		return userService.getAllDoctors();
	}
	
	@PostMapping("/doctor/login")
	public DoctorModel loginDoctor(@RequestBody UserDetails doctor) {
		
		return userService.validateDoctor(doctor);
	}
	
//supplier mapping
	
	@PostMapping("/supplier/register")
	public SupplierModel registerSupplier(@RequestBody SupplierModel supplier) {
		return userService.saveSupplier(supplier);
	}
	
	@GetMapping("/supplier/getAll")
	public List<SupplierModel> getAllSuppliers(){
		return userService.getAllSuppliers();
	}
	
	
	@PostMapping("/supplier/validate/{email}")
	public boolean validatePasswordSupplier(@PathVariable("email")String email,@RequestBody String password) {
		
		return userService.validatePasswordSupplier(email,password);
	}
	
	@PostMapping("/supplier/newpassword")
	public void changePasswordSupplier(@RequestBody SupplierModel supplier) {
		userService.updateSupplier(supplier);
	}
	
	@PostMapping("/supplier/block")
	public List<SupplierModel> blockSupplier(@RequestBody SupplierModel supplier){
		userService.blockSupplier(supplier);
		return userService.getAllSuppliers();
	}
	@PostMapping("/supplier/unblock")
	public List<SupplierModel> unblockSupplier(@RequestBody SupplierModel supplier){
		userService.unblockSupplier(supplier);
		return userService.getAllSuppliers();
	}
	
	@PostMapping("/supplier/login")
	public SupplierModel loginSupplier(@RequestBody UserDetails supplier) {
		
		return userService.validateSupplier(supplier);
	}
	

	
}
