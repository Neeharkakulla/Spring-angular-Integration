import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationForm } from 'src/model/application-form';

@Injectable({
  providedIn: 'root'
})
export class ApplicationFromService {
  getAllApplication() {
    return this.http.get<ApplicationForm[]>(this.baseUrl+"/getAll");
  }
  approveDelivery(form: ApplicationForm) {
    return this.http.put<ApplicationForm[]>(this.baseUrl+"/approve/delivery",form)  
  }
  getApplicationsWithSupplier() {
    return this.http.get<ApplicationForm[]>(this.baseUrl+"/waitingwith/supplier") 
  }
  approve(form: ApplicationForm) {
    return this.http.put<ApplicationForm[]>(this.baseUrl+"/approve",form)
  }
  getApplicationsWithDoctor() {
   return this.http.get<ApplicationForm[]>(this.baseUrl+"/waitingwith/doctor")
  }
  cancel(form: ApplicationForm) {
    return this.http.put(this.baseUrl+"/cancel",form)
  }
  revoke(form:ApplicationForm){
    return this.http.put(this.baseUrl+"/revoke",form)
  }
  myApplication(email: String) {
    return this.http.get<ApplicationForm[]>(this.baseUrl+"/myapplications/"+email);
  }
  applyForm(value: any) {
    return this.http.post(this.baseUrl+"/applyForm",value)
  }

 private baseUrl="http://localhost:8001//api/application";
  constructor(private http:HttpClient) { }
}
