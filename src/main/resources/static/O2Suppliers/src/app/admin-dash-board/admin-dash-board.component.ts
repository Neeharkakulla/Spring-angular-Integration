import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationForm } from 'src/model/application-form';
import { DoctorDetails } from 'src/model/doctor-details';
import { SupplierDetails } from 'src/model/supplier-details';
import { UserDetails } from 'src/model/user-details';
import { ApplicationFromService } from 'src/services/application-from.service';
import { DoctorService } from 'src/services/doctor.service';
import { ImageService } from 'src/services/image.service';
import { O2SupplierService } from 'src/services/o2-supplier.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {
  admin:UserDetails
  doctors:DoctorDetails[]
  users:UserDetails[]
  suppliers:SupplierDetails[]
  applications:ApplicationForm[]
  oldPassword: any;
  passwordValid:boolean=false;
  newpassword:any;
  newpassword2:any;
  listApplications:boolean=true;
  myDetails:boolean=false;
  listUsers:boolean=false;
  listDoctors:boolean=false;
  listSuppliers:boolean=false;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageUploded: boolean=false;
  imageName: any;
  constructor(private userService:UserService,
    private router:Router,
    private formService:ApplicationFromService,
    private doctorService:DoctorService,
    private supplierService:O2SupplierService,
    private imageService:ImageService) { }

  ngOnInit(): void {
    this.admin=this.userService.auser
    if(this.admin==undefined||this.admin==null){
      this.router.navigate([''])
    }
    this.getdata();
  }

  getdata(){
    this.supplierService.getAllSuppliers().subscribe(data=>this.suppliers=data)
    this.doctorService.getAllDoctors().subscribe(data=>this.doctors=data)
    this.userService.getAllUsers().subscribe(data=>{this.users=data})
    this.formService.getAllApplication().subscribe(data=>this.applications=data);

  }

  allApplications(){
      this.listApplications=true;
      this.listDoctors=false;
      this.listSuppliers=false;
      this.listUsers=false;
      this.myDetails=false;
  }
  allUsers(){
      this.listApplications=false;
      this.listDoctors=false;
      this.listSuppliers=false;
      this.listUsers=true;
      this.myDetails=false;
  }
  allDoctors(){
    this.listApplications=false;
    this.listDoctors=true;
    this.listSuppliers=false;
    this.listUsers=false;
    this.myDetails=false;
  }
  allSuppliers(){
    this.listApplications=false;
    this.listDoctors=false;
    this.listSuppliers=true;
    this.listUsers=false;
    this.myDetails=false;
  }
  myAccount(){
    this.listApplications=false;
    this.listDoctors=false;
    this.listSuppliers=false;
    this.listUsers=false;
    this.myDetails=true;
  }
  logout(){
      this.userService.auser=undefined
      this.router.navigate([''])
  }


  validate(){
    this.userService.validatepassword(this.oldPassword).subscribe(data=>{
        if(data)
        this.passwordValid=true;
        else
        alert("Please enter a valid Password")
    });
  }
 changePassword(){
   if(!this.passwordValid){
      alert("Please validate your Password")
      return;
   }
     if(!(this.newpassword===this.newpassword2)){
      alert("Passwords Did not match")
      return;
   }
   this.userService.auser.password=this.newpassword;
   this.userService.changePassword().subscribe(data=>{
     alert(" Password Succesfully Changed")
     this.newpassword=""
     this.newpassword2=""
     this.oldPassword=""
     this.passwordValid=false;
   });
 }
 cancel(form:ApplicationForm){
   form.status=false;
    this.formService.cancel(form).subscribe();
 }
 revoke(form:ApplicationForm){
  form.status=true;
   this.formService.revoke(form).subscribe();
  }
  blockUser(user:UserDetails){
    this.userService.blockUser(user).subscribe(data=>this.users=data);
  }
  unBlockUser(user:UserDetails){
    this.userService.unBlockUser(user).subscribe(data=>this.users=data)
  }
  blockDoctor(doctor:DoctorDetails){
    this.doctorService.blockDoctor(doctor).subscribe(data=>this.doctors=data);
  }
  unBlockDoctor(doctor:DoctorDetails){
    this.doctorService.unBlockDoctor(doctor).subscribe(data=>this.doctors=data)
  }
  blockSupplier(supplier:SupplierDetails){
    this.supplierService.blockSupplier(supplier).subscribe(data=>this.suppliers=data);
  }
  unBlockSupplier(supplier:SupplierDetails){
    this.supplierService.unBlockSupplier(supplier).subscribe(data=>this.suppliers=data)
  }
}
