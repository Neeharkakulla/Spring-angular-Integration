import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  uploadImage(uploadImageData: FormData) {
    return this.http.post<any>(this.baseUrl+'/upload', uploadImageData)
  }
  private baseUrl="http://localhost:8001/api/users/image";
  getImage(id: any) {
    return this.http.get(this.baseUrl+"/get/"+id)
  }

  constructor(private http:HttpClient) { }
}
