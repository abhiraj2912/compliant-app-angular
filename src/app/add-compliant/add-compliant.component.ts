import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-compliant',
  templateUrl: './add-compliant.component.html',
  styleUrls: ['./add-compliant.component.css']
})
export class AddCompliantComponent {
  constructor(private api:ApiService){}

  compliant=""
  userId=localStorage.getItem("userInfo")
  

  readCompliant=()=>{
    let data:any={"compliant":this.compliant,"userId":this.userId}

    this.api.addCompliant(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Compliant Added Successfully")
          this.compliant=""

        } else {
          alert("something went wrong")
        }
      }
    )
  }
}
