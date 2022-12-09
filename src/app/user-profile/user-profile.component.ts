import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  userID:any=""
   data:any=[]
  constructor(private api:ApiService){
    this.userID=localStorage.getItem("userInfo")
    let data:any={"id":this.userID}
    api.userInfo(data).subscribe(
      (response:any)=>{
        this.data=response
      }
    )

  }

}
