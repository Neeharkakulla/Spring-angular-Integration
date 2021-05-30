package com.api.o2Suppliers.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="application_form")
public class ApplicationForm {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String applicantName;
	
	private String applicantMail;
	
	private String patientName;
	
	private String address;
	
	private String city;
	
    private String district;
    
    private String state;
    
    private String mobile;
    
    private boolean status;
    
    private int imageId;
    
    private String waitingWith;
    
    private String approvedBy;
    
    private String emergency;
    
    private boolean deliveryinitiated;
    
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private Date appliedOn;
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private Date  approvedOn;
    
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private Date  lastUpdate;
    
    
	public Date getAppliedOn() {
		return appliedOn;
	}

	public void setAppliedOn(Date appliedOn) {
		this.appliedOn = appliedOn;
	}

	public Date getApprovedOn() {
		return approvedOn;
	}

	public void setApprovedOn(Date approvedOn) {
		this.approvedOn = approvedOn;
	}

	public Date getLastUpdate() {
		return lastUpdate;
	}

	public void setLastUpdate(Date lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public String getApprovedBy() {
		return approvedBy;
	}

	public void setApprovedBy(String approvedBy) {
		this.approvedBy = approvedBy;
	}

	public String getEmergency() {
		return emergency;
	}

	public void setEmergency(String emergency) {
		this.emergency = emergency;
	}

	public boolean isDeliveryinitiated() {
		return deliveryinitiated;
	}

	public void setDeliveryinitiated(boolean deliveryinitiated) {
		this.deliveryinitiated = deliveryinitiated;
	}

	public String getWaitingWith() {
		return waitingWith;
	}

	public void setWaitingWith(String waitingWith) {
		this.waitingWith = waitingWith;
	}

	public int getImageId() {
		return imageId;
	}

	public void setImageId(int imageId) {
		this.imageId = imageId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getApplicantName() {
		return applicantName;
	}

	public void setApplicantName(String applicantName) {
		this.applicantName = applicantName;
	}
	
	

	public String getApplicantMail() {
		return applicantMail;
	}

	public void setApplicantMail(String applicantMail) {
		this.applicantMail = applicantMail;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public boolean getStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}


	

	
	
	public ApplicationForm(int id, String applicantName, String applicantMail, String patientName, String address,
			String city, String district, String state, String mobile, boolean status, int imageId, String waitingWith,
			String approvedBy, String emergency, boolean deliveryinitiated, Date appliedOn, Date approvedOn,
			Date lastUpdate) {
		super();
		this.id = id;
		this.applicantName = applicantName;
		this.applicantMail = applicantMail;
		this.patientName = patientName;
		this.address = address;
		this.city = city;
		this.district = district;
		this.state = state;
		this.mobile = mobile;
		this.status = status;
		this.imageId = imageId;
		this.waitingWith = waitingWith;
		this.approvedBy = approvedBy;
		this.emergency = emergency;
		this.deliveryinitiated = deliveryinitiated;
		this.appliedOn = appliedOn;
		this.approvedOn = approvedOn;
		this.lastUpdate = lastUpdate;
	}

	public ApplicationForm() {
		super();
		
	}
		@Override
		public String toString() {
			return "ApplicationForm [id=" + id + ", applicantName=" + applicantName + ", applicantMail=" + applicantMail
					+ ", patientName=" + patientName + ", address=" + address + ", city=" + city + ", district="
					+ district + ", state=" + state + ", mobile=" + mobile + ", status=" + status + ", imageId="
					+ imageId + ", waitingWith=" + waitingWith + ", approvedBy=" + approvedBy + ", emergency="
					+ emergency + ", deliveryinitiated=" + deliveryinitiated + ", appliedOn=" + appliedOn
					+ ", approvedOn=" + approvedOn + ", lastUpdate=" + lastUpdate + "]";
		}

	
    
    
}
