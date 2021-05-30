import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationForm } from 'src/model/application-form';
import { SupplierDetails } from 'src/model/supplier-details';
import { ApplicationFromService } from 'src/services/application-from.service';
import { ImageService } from 'src/services/image.service';
import { O2SupplierService } from 'src/services/o2-supplier.service';

@Component({
  selector: 'app-suppliers-dash-board',
  templateUrl: './suppliers-dash-board.component.html',
  styleUrls: ['./suppliers-dash-board.component.css']
})
export class SuppliersDashBoardComponent implements OnInit {

 
  supplier:SupplierDetails
  applications:ApplicationForm[]
  oldPassword: any;
  passwordValid:boolean=false;
  newpassword:any;
  newpassword2:any;
  checkStatus:boolean=true;
  myDetails:boolean=false;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageUploded: boolean=false;
  imageName: any;
  constructor( private supplierService:O2SupplierService,
    private formService:ApplicationFromService,
    private router:Router,
    private imageService:ImageService) { }

  ngOnInit(): void {
    if(this.supplierService.asupplier==undefined)
    this.router.navigate([''])
    this.supplier=this.supplierService.asupplier
    this.getApplications();
  }
  getApplications() {
    this.formService.getApplicationsWithSupplier().subscribe(data=>{
      this.applications=data
    },err=>{
      alert(err.name)
    });
  }
  

  logout(){
    this.supplierService.asupplier=undefined
    this.router.navigate([''])
  }
  myAccount(){
    this.checkStatus=false;
    this.myDetails=true;
 
  }
  waitingApplications(){
    this.checkStatus=true;
    this.myDetails=false;
 
  }
  validate(){
    this.supplierService.validatepassword(this.oldPassword).subscribe(data=>{
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
   console.log(this.newpassword2==this.newpassword)
   console.log(this.newpassword2===this.newpassword)
   if(!(this.newpassword===this.newpassword2)){
      alert("Passwords Did not match")
      return;
   }
   this.supplierService.asupplier.password=this.newpassword;
   this.supplierService.changePassword().subscribe(data=>{
     alert(" Password Succesfully Changed")
     this.newpassword=""
     this.newpassword2=""
     this.oldPassword=""
     this.passwordValid=false;
   });
 }
     //Gets called when the user clicks on retieve image button to get the image from back end
     getImage(id:any) {
      //Make a call to Sprinf Boot to get the Image Bytes.
      
        this.imageService.getImage(id).subscribe(
          res => {
            this.retrieveResonse = res;
            this.base64Data = this.retrieveResonse.picByte;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
             window.sessionStorage.setItem("image",this.retrievedImage);
             window.open("http://localhost:4200/view-document","_blank");
          }
        );
    }
    approveDelivery(form:ApplicationForm){
      this.formService.approveDelivery(form).subscribe(data=>{
        this.applications=data
      })
    }
    

}
