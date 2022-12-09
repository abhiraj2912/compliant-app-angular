import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  registerUser=(userData:any)=>{
    return this.http.post("http://localhost:8080/adduser",userData)
  }

  loginCheck=(loginData:any)=>{
    return this.http.post("http://localhost:8080/login",loginData)
  }
}
