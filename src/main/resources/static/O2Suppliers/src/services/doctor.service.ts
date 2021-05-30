import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorDetails } from 'src/model/doctor-details';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  unBlockDoctor(doctor: DoctorDetails) {
    return this.http.post<DoctorDetails[]>(this.baseUrl+"/unblock",doctor)
  }
  
  blockDoctor(doctor: DoctorDetails) {
    return this.http.post<DoctorDetails[]>(this.baseUrl+"/block",doctor)
    }
  changePassword() {
    return this.http.post(this.baseUrl+'/newpassword',this.adoctor);
      }
  validatepassword(oldPassword: any) {
    return this.http.post<boolean>(this.baseUrl+"/validate/"+this.adoctor.email,oldPassword)
  }
  getAllDoctors() {
  return this.http.get<DoctorDetails[]>(this.baseUrl+"/getAll")
  }
  private baseUrl="http://localhost:8001/api/users/doctor"
  adoctor:DoctorDetails
  registerUser(doctor: DoctorDetails) {
   return this.http.post(this.baseUrl+"/register",doctor)
  }
  validateUser(doctor: DoctorDetails) {
    return this.http.post<DoctorDetails>(this.baseUrl+"/login",doctor)
  }

  constructor(private http:HttpClient) { }
}
