import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddCompliantComponent } from './add-compliant/add-compliant.component';
import { UserViewCompliantComponent } from './user-view-compliant/user-view-compliant.component';
import { AdminViewCompliantComponent } from './admin-view-compliant/admin-view-compliant.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"usersignup",
    component:UserRegisterComponent
  },
  {
    path:"userprofile",
    component:UserProfileComponent
  },
  {
    path:"adminhome",
    component:AdminDashboardComponent
  },
  {
    path:"addcompliant",
    component:AddCompliantComponent
  },
  {
    path:"viewcompliants",
    component:AdminViewCompliantComponent
  },
  {
    path:"userviewcompliants",
    component:UserViewCompliantComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    AddCompliantComponent,
    UserViewCompliantComponent,
    AdminViewCompliantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
