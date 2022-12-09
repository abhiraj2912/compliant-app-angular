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
    UserProfileComponent
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
