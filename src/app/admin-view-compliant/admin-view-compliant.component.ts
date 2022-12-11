import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-view-compliant',
  templateUrl: './admin-view-compliant.component.html',
  styleUrls: ['./admin-view-compliant.component.css']
})
export class AdminViewCompliantComponent {

  data:any=[]

  constructor(private api:ApiService){
    api.adminViewAll().subscribe(
      (response:any)=>
      this.data=response
    )
  }

}
