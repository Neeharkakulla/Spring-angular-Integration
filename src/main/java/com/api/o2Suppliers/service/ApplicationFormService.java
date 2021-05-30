package com.api.o2Suppliers.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.o2Suppliers.dao.ApplicationFormRepository;
import com.api.o2Suppliers.model.ApplicationForm;

@Service
public class ApplicationFormService {
	
	@Autowired
	ApplicationFormRepository formrepo;
	@Autowired 
	UserService userService;

	public void applyForm(ApplicationForm form) {
		form.setStatus(true);
		form.setWaitingWith("doctor");
		form.setAppliedOn(new Date(System.currentTimeMillis()));
		form.setLastUpdate(new Date(System.currentTimeMillis()));
		formrepo.save(form);
	}

	public ArrayList<ApplicationForm> getApplicationWithUserId(String applicantMail) {
		return formrepo.findByApplicantMail(applicantMail);
	}

	public void updateForm(ApplicationForm form) {
		form.setLastUpdate(new Date(System.currentTimeMillis()));
		formrepo.save(form);
	}

	public List<ApplicationForm> getApplicationWaitingWithDoctor() {
		return formrepo.findByWaitingWith("doctor").stream()
				.filter(f->f.getStatus()).collect(Collectors.toList());
	}

	public void approveRequest(ApplicationForm form) {
		form.setWaitingWith("supplier");
		form.setApprovedOn(new Date(System.currentTimeMillis()));
		form.setLastUpdate(new Date(System.currentTimeMillis()));
		formrepo.save(form);
		
	}

	public List<ApplicationForm> getApplicationWaitingWithSupplier() {
		
		return formrepo.findByWaitingWith("supplier").stream()
				.filter(f->f.getStatus()).collect(Collectors.toList());
	}

	public void approveDelivery(ApplicationForm form) {
		form.setWaitingWith("delivered");
		form.setDeliveryinitiated(true);
		form.setStatus(false);
		form.setLastUpdate(new Date(System.currentTimeMillis()));
		formrepo.save(form);
		
	}

	public List<ApplicationForm> getAll() {
		
		return formrepo.findAll();
	}
	
	
	
}
