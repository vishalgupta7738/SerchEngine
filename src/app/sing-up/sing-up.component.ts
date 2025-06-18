import { Component } from '@angular/core';
import { UserDetailsService } from '../UserdDetailsService/user-details.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { response } from 'express';
import { RouterLink } from '@angular/router';
import { error } from 'node:console';
import { __await } from 'tslib';
import { userInfo } from 'node:os';


@Component({
  selector: 'app-sing-up',
  imports: [CommonModule,FormsModule , RouterLink],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css',
  providers:[UserDetailsService,HttpClient]
})
export class SingUpComponent {
  Users:any=
  {
        username:'',
        email:'',
        phone_no:'',
  }   
 constructor(private accessservice:UserDetailsService){}



  ClickSingUp(){
  
    this.accessservice.UserRegister(this.Users).subscribe(response=>{
      console.log(response);
       alert('Please wait for Admin Approval');
   
      
    },error=>{
      console.log(error);
       alert("Please Enter Correct Information");
   
    }
    
    
  ); 
  }

}
