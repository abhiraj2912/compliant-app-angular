import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  constructor(private api:ApiService){}

  name=""
  address=""
  pincode=""
  phone=""
  email=""
  username=""
  password=""
  cpassword=""

  
  registerValues=()=>{
    if (this.password==this.cpassword) {
      let data:any={"name" : this.name, "address" : this.address, "pincode" : this.pincode, "email" : this.email, "phone" : this.phone, "username" : this.username, "password" : this.password}
      console.log(data)
      this.api.registerUser(data).subscribe(
        (response:any)=>{
          if (response.status=="success") {
            alert("Registration Successfull")
            this.name=""
            this.address=""
            this.pincode=""
            this.phone=""
            this.email=""
            this.username=""
            this.password=""
            this.cpassword=""
          } else {
            alert("Something went wrong")
          }
        }
      )
      
    } else {
      alert("Password not matching")
    }

  }

}
