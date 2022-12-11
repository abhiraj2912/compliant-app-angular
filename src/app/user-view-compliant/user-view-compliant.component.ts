import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-view-compliant',
  templateUrl: './user-view-compliant.component.html',
  styleUrls: ['./user-view-compliant.component.css']
})
export class UserViewCompliantComponent {

  data:any=[]
  userId=localStorage.getItem("userInfo")
  

  constructor(private api:ApiService){
    let userData:any={"userId":this.userId}
    api.userViewCompliants(userData).subscribe(
      (response)=>{
        
        console.log(response)
        this.data=response
      }
    )
  }

}
