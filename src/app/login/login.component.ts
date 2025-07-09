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
import { FirstloginComponent } from '../firstlogin/firstlogin.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule  , RouterLink , FormsModule , CommonModule , HttpClientModule,FirstloginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[RequestService,HttpClient]
})
export class LoginComponent {

 loginForm!: FormGroup;
  errorMessage = '';

constructor(
    private auth: AuthServicesService,
    private router: Router,
    private fb: FormBuilder,
   private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
    onLogin() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please enter valid Email and Password';
     this.toastr.error(this.errorMessage, 'Validation Error');
      return;
    }
     const loginData = this.loginForm.value;
     this.auth.login(loginData).subscribe({
      next: (res: any) => {
        const token = res.token;
        this.auth.saveToken(token);
       this.toastr.success('Login successful!', 'Success');
      if(res.user){
        localStorage.setItem('userProfile',JSON.stringify(res.user)) ; 
      }
      const role = this.auth.getUserRole();
   if (role === 'Admin') {
          this.router.navigate(['/Admin']);
        } else if (role === 'User') {
          this.router.navigate(['/']);
        } else {
         this.toastr.warning('Unknown Role', 'Warning');
       // alert("Unknown role. Contact admin.");
        }
      },
       error: err => {
        this.toastr.warning('Invalid Email or Password');
        console.error(err);
      }
    }); 
  }
}



