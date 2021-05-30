import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/model/user-details';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  admin:boolean=false;
  showModal: boolean=true;
  loginForm: FormGroup;
  registerForm : FormGroup
   submitted = false; 
   tLoginRegister = false;
   log: string;
   validate= true;
  user: UserDetails;
 
 
   constructor(private formBuilder: FormBuilder,
     private router : Router,
      private userService:UserService,) 
      { }
   show()
   {
     this.showModal = true; 
   }
   Logout(){

     this.log = undefined
   }
 
 
   toggleLoginRegister(){
    
    if(window.sessionStorage.getItem("role")=="admin"){
     this.admin=true;
     alert("Registration for admin is Disabled contact your administrator")
     return;
    }
    else{
      this.admin=false;
    }
     if(this.tLoginRegister==false){  
       this.tLoginRegister = true;
     }else{
       this.tLoginRegister=false;
     }
  }
 
   //Bootstrap Modal Close event
   hide()
   {
     if(this.tLoginRegister==true)
     this.toggleLoginRegister()
    if(window.sessionStorage.getItem("role")=="admin"){
      this.admin=false;
      
     }
     

    document.getElementById("loginForm").style.display="none";
   }
   ngOnInit() {
    this.showModal=true;
    
     this.registerForm = this.formBuilder.group({
     
       firstName: ['', [Validators.required, Validators.minLength(6)]],
       lastName: ['', [Validators.required, Validators.minLength(6)]],
       role:[],
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(4)]],
       number: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$"),]]
     });
 
     this.loginForm = this.formBuilder.group({
       
      
       email: ['admin@admin.com', [Validators.required, Validators.email]],
       password: ['admin', [Validators.required, Validators.minLength(4)]],
       role:[],
       
     });
 }

 // convenience getter for easy access to form fields
 get f() { return this.loginForm.controls; }
 get r() { return this.registerForm.controls; }
 onSubmit() {
     this.submitted = true;
     if (this.loginForm.invalid) {
       return;
     }   
     this.user=this.loginForm.value;
     this.user.role=window.sessionStorage.getItem("role");
    
     this.userService.validateUser(this.user).subscribe(data=>{
      
      if(data!=null)
      {
        this.hide();
        this.userService.auser=data;
        if(this.user.role==="user")
        this.router.navigate(['/userdashboard'])
    else if(this.user.role==="admin")
        this.router.navigate(['/admindashboard'])
   else if(this.user.role==="supplier")
       this.router.navigate(['/supplierdashboard'])
   else if(this.user.role==="doctor")
     this.router.navigate(['/doctordashboard'])
      }
      else{
        document.getElementById("login").innerHTML="<p color='red'> Invalid Credentials</p>"
      }
     },err=>{
       alert(err.name)
     })
    
     
    
     
 }
 
 
 
 onRegister(){
 
   this.submitted = true;
     // stop here if form is invalid
     if (this.registerForm.invalid) {
         return;
     }
     
     if(this.submitted)
     {
       this.showModal = false;
     }
    this.user=this.registerForm.value
    this.user.role=window.sessionStorage.getItem("role");
    this.userService.registerUser(this.user).subscribe(data=>{
      
      if(data)
      this.toggleLoginRegister();
    },err=>{
      alert(err.name)
    });
  } 
 
 
}

