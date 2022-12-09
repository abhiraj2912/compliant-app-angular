import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {


  name=""
  address=""
  pincode=""
  phone=""
  email=""
  username=""
  password=""

  
  readValues=()=>{
    let data:any={"name" : this.name, "address" : this.address, "pincode" : this.pincode, "email" : this.email, "phone" : this.phone, "username" : this.username, "password" : this.password}
    console.log(data)
  }

}
