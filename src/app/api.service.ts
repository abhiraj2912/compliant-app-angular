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

  userInfo=(userId:any)=>{
    return this.http.post("http://localhost:8080/userinfo",userId)
  }

  addCompliant=(compliantData:any)=>{
    return this.http.post("http://localhost:8080/addcompliant",compliantData)
  }

  adminViewAll=()=>{
    return this.http.get("http://localhost:8080/acompliantview")
  }

  userViewCompliants=(userData:any)=>{
    return this.http.post("http://localhost:8080/ucompliantview",userData)
  }
}
