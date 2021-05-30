import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagesUrl:String[]
  role:any;
  constructor(private userService:UserService,
    private router:Router) { }

  
 
  ngOnInit() {
    this.imagesUrl = [
      '../../assets/images/slider1.jpg', 
      '../../assets/images/slider2.jpg', 
      '../../assets/images/slider3.jpg',
    '../../assets/images/slider4.jpg'];
  }
  

  
  @HostListener('window:scroll', ['$event'])
  handleScroll(event: KeyboardEvent) {
    let scroll=window.pageYOffset;
    console.log(scroll)
    if(scroll>=160)
    {
      document.getElementById("aboutimage").style.animation='2s fadeInFromRight 1'
      document.getElementById("aboutheading").style.animation='2s fadeInFromLeft 1'
      document.getElementById("aboutpara").style.animation='2s fadeInFromLeft 1'
    }
    if(scroll>=580)
    {
      document.getElementById("visionimage").style.animation='2s fadeInFromLeft 1'
      document.getElementById("visionheading").style.animation='2s fadeInFromRight 1'
      document.getElementById("visionpara").style.animation='2s fadeInFromRight 1'
    }
    if(scroll>=900){
      document.getElementById("missionimage").style.animation='2s fadeInFromRight 1'
      document.getElementById("missionheading").style.animation='2s fadeInFromLeft 1'
      document.getElementById("missionpara").style.animation='2s fadeInFromLeft 1'
    }
  }
  login(role:String){
  
    this.role=role;
   window.sessionStorage.setItem("role",role.toString());
    
    
    if(this.role==="user"||this.role==="admin"){
      document.getElementById("loginForm").style.display="inline-block";
    document.getElementById("login").innerHTML="";
      }
      if(this.role==="doctor"){
        document.getElementById("doctorForm").style.display="inline-block";
        document.getElementById("login").innerHTML="";
      }
      if(this.role==="suppliers"){
        document.getElementById("supplierForm").style.display="inline-block";
        document.getElementById("login").innerHTML="";
      }
  }
  close(){

    if(this.role==="user"||this.role==="admin"){
      document.getElementById("loginForm").style.display="none";
    document.getElementById("login").innerHTML="";
      }
      if(this.role==="doctor"){
        document.getElementById("doctorForm").style.display="none";
        document.getElementById("login").innerHTML="";
      }
      if(this.role==="suppliers"){
        document.getElementById("supplierForm").style.display="none";
        document.getElementById("login").innerHTML="";
      }
  }

}
