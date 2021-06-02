package com.api.o2Suppliers.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.o2Suppliers.model.ApplicationForm;
import com.api.o2Suppliers.service.ApplicationFormService;


@RestController
@RequestMapping("/api/application")
public class ApplicationFormController {
	@Autowired
	ApplicationFormService formService;
	
	@GetMapping("/getAll")
	public List<ApplicationForm> getAll(){
		return formService.getAll();
	}
	@PostMapping("/applyForm")
	public void applyForm(@RequestBody ApplicationForm form) {
		
		formService.applyForm(form);
	}
	@GetMapping("/myapplications/{email}")
	public List<ApplicationForm> getMyApplications(@PathVariable("email") String email){
		
		
		return formService.getApplicationWithUserId(email);
	}
	
	@PutMapping("/cancel")
	public void cancelForm(@RequestBody ApplicationForm form) {
		formService.updateForm(form);
	}
	
	@PutMapping("/revoke")
	public void revokeForm(@RequestBody ApplicationForm form) {
		formService.updateForm(form);
	}

	@GetMapping("/waitingwith/doctor")
	public List<ApplicationForm> getApplicationWaitingWithDoctor(){
		

		return formService.getApplicationWaitingWithDoctor();
		
		
		
	}
	@PutMapping("/approve")
	public List<ApplicationForm> approveRequesst(@RequestBody ApplicationForm form){
		
		formService.approveRequest(form);
		return formService.getApplicationWaitingWithDoctor();
	}
	@GetMapping("/waitingwith/supplier")
	public List<ApplicationForm> getApplicationWaitingWithSupplier(){
		return formService.getApplicationWaitingWithSupplier();
	}
	@PutMapping("/approve/delivery")
	public List<ApplicationForm> approveDelivery(@RequestBody ApplicationForm form){
		formService.approveDelivery(form);
		return formService.getApplicationWaitingWithSupplier();
	}
	
}
