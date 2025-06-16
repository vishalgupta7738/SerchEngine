import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {Router, RouterLink } from '@angular/router';
import { RequestService } from '../RequestService/request.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from '../LoginService/login.service';
import { Route } from '@angular/router';
import { Routes } from '@angular/router';
import { response } from 'express';
import { AuthServicesService } from '../LoginService/auth-services.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule  , RouterLink , FormsModule , CommonModule , HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[RequestService,HttpClient]
})
export class LoginComponent {

    credentials:any = {
      email:'',
      password :''
      
    };

   loginSuccess = false;

  LoginForm= new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });


constructor(private router: Router, private loginService : LoginService){}

  LoginSubmit(){
   // console.log(this.LoginForm.value);

 console.log(this.credentials);
 
    this.loginService.login(this.credentials).subscribe({
    
      next: (res : any) => {
        if(res.role==='admin'){
        
           if(localStorage.getItem('userProfile')!==null)
          {
              localStorage.removeItem('userProfile');
          }
            localStorage.setItem('jwtToken' , res.token); 
            this.router.navigate(['/Admin']);
           }
        else if(res.role==='user')
          {
              localStorage.setItem('userrole','user');
     localStorage.setItem('jwtToken',res.token) ; 
          if(localStorage.getItem('userProfile')!==null)
          {
              localStorage.removeItem('userProfile');
          }
            
            localStorage.setItem('userProfile', JSON.stringify(res.user));
           this.router.navigate(['/'])
           localStorage.setItem('valid','true');
          }

      //      this.route.navigate(['/Search'], {
      // queryParams: { query: this.searchTerm }
      },
      error : err => {
        alert('Invalid Email or Password');
   
        console.error(err);
      }
      
    })
    // this.loginService.login(this.credentials).subscribe(response=>{
    //  console.log(response);
    // })
  }
  
}