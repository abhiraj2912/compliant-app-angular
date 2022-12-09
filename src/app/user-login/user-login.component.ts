import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private api:ApiService, private route:Router){}

  username=""
  password=""

  readValues=()=>{
    let data:any={"username":this.username,"password":this.password }
    console.log(data)

    this.api.loginCheck(data).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          let userId:any=response.id
          console.log(userId)
          localStorage.setItem("userInfo", userId)
          this.route.navigate(['/viewprofile'])
        } else {
          alert("Invalid Credentials")
        }
      }
    )

  }

}
