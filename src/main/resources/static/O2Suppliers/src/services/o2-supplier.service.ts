import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupplierDetails } from 'src/model/supplier-details';

@Injectable({
  providedIn: 'root'
})
export class O2SupplierService {
  unBlockSupplier(supplier: SupplierDetails) {
    return this.http.post<SupplierDetails[]>(this.baseUrl+"/unblock",supplier)

  }
 
  blockSupplier(supplier: SupplierDetails) {
    return this.http.post<SupplierDetails[]>(this.baseUrl+"/block",supplier)
  }
  changePassword() {
    return this.http.post(this.baseUrl+'/newpassword',this.asupplier);
      }
  validatepassword(oldPassword: any) {
    return this.http.post<boolean>(this.baseUrl+"/validate/"+this.asupplier.email,oldPassword)
  }
  getAllSuppliers() {
    return this.http.get<SupplierDetails[]>(this.baseUrl+"/getAll")
  }
  private baseUrl="http://localhost:8001/api/users/supplier"
  asupplier: SupplierDetails;
  registerUser(supplier:SupplierDetails) {
   return this.http.post(this.baseUrl+"/register",supplier)
  }
  validateUser(supplier: SupplierDetails) {
    return this.http.post<SupplierDetails>(this.baseUrl+"/login",supplier)
  }

  constructor(private http:HttpClient) { }
}
