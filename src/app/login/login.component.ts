import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router, RouterLink } from '@angular/router';
import { RequestService } from '../RequestService/request.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from '../LoginService/login.service';
import { Route } from '@angular/router';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule  , RouterLink , FormsModule , CommonModule , HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[RequestService,HttpClient]
})
export class LoginComponent {

   loginSuccess = false;

  LoginForm= new FormGroup({
    EmailID : new FormControl(''),
    PassWord : new FormControl('')
  });


constructor(private router: Router, private loginService : LoginService){}

  LoginSubmit(){
    console.log(this.LoginForm.value);

    const credentials = {
      Email: this.LoginForm.value.EmailID ?? '',
      Password : this.LoginForm.value.PassWord ?? ''
      
    };

    this.loginService.login(credentials).subscribe({
      next: (res : any) => {
        localStorage.setItem('jwtToken' , res.token);
        this.router.navigate(['/Admin']);
      },
      error : err => {
        alert('Invalid Email or Password');
        console.error(err);
      }
      
    })
    
  

  }



}




