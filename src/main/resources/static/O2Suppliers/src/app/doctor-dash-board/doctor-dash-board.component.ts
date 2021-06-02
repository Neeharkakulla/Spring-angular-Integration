import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ApplicationForm } from 'src/model/application-form';
import { DoctorDetails } from 'src/model/doctor-details';
import { ApplicationFromService } from 'src/services/application-from.service';
import { DoctorService } from 'src/services/doctor.service';
import { ImageService } from 'src/services/image.service';

@Component({
  selector: 'app-doctor-dash-board',
  templateUrl: './doctor-dash-board.component.html',
  styleUrls: ['./doctor-dash-board.component.css']
})
export class DoctorDashBoardComponent implements OnInit {
  emergency:string="select"
  doctor:DoctorDetails
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
  constructor( private doctorService:DoctorService,
    private formService:ApplicationFromService,
    private router:Router,
    private imageService:ImageService) { }

  ngOnInit(): void {
    if(this.doctorService.adoctor==undefined)
    this.router.navigate([''])
    this.doctor=this.doctorService.adoctor
    this.getApplications();
  }
  getApplications() {
    this.formService.getApplicationsWithDoctor().subscribe(data=>{
      this.applications=data
    },err=>{
      alert(err.name)
    });
  }
  

  logout(){
    this.doctorService.adoctor=undefined
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
    this.doctorService.validatepassword(this.oldPassword).subscribe(data=>{
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
   this.doctorService.adoctor.password=this.newpassword;
   this.doctorService.changePassword().subscribe(data=>{
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
          
            document.getElementById("imageOverlay").style.display="block"
            document.getElementById("image").setAttribute("src",this.retrievedImage)
          }
        );
    }
    approve(form:ApplicationForm){
      form.approvedBy=this.doctor.firstName+" "+this.doctor.lastName
      if(form.emergency==null&&form.emergency==undefined){
        alert("Please Specify Emergency!")
        return
      }
      this.formService.approve(form).subscribe(data=>{
        this.applications=data;
      })
    }
    
}
