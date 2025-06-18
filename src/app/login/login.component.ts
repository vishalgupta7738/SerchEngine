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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule  , RouterLink , FormsModule , CommonModule , HttpClientModule,FirstloginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[RequestService,HttpClient]
})
export class LoginComponent {

//     credentials:any = {
//       email:'',
//       password :''
      
//     };

//    loginSuccess = false;

//   LoginForm= new FormGroup({
//     email : new FormControl(''),
//     password : new FormControl('')
//   });


// constructor(private router: Router, private loginService : LoginService){}

//   LoginSubmit(){
//    // console.log(this.LoginForm.value);

//  console.log(this.credentials);
 
//     this.loginService.login(this.credentials).subscribe({
    
//       next: (res : any) => {
//         if(res.role==='admin'){
        
//            if(localStorage.getItem('userProfile')!==null)
//           {
//               localStorage.removeItem('userProfile');
//           }
//             localStorage.setItem('jwtToken' , res.token); 
//             this.router.navigate(['/Admin']);
//            }
//         else if(res.role==='user')
//           {
//               localStorage.setItem('userrole','user');
//      localStorage.setItem('jwtToken',res.token) ; 
//           if(localStorage.getItem('userProfile')!==null)
//           {
//               localStorage.removeItem('userProfile');
//           }
            
//             localStorage.setItem('userProfile', JSON.stringify(res.user));
//            this.router.navigate(['/'])
//            localStorage.setItem('valid','true');
//           }

//       //      this.route.navigate(['/Search'], {
//       // queryParams: { query: this.searchTerm }
//       },
//       error : err => {
//         alert('Invalid Email or Password');
   
//         console.error(err);
//       }
      
//     })
//     // this.loginService.login(this.credentials).subscribe(response=>{
//     //  console.log(response);
//     // })
//   }
  
// }

// mant code 

 loginForm!: FormGroup;
  errorMessage = '';

constructor(
    private auth: AuthServicesService,
    private router: Router,
    private fb: FormBuilder,
  // private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
    onLogin() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please enter valid Email and Password';
    //  this.toastr.error(this.errorMessage, 'Validation Error');
      return;
    }
     const loginData = this.loginForm.value;
     this.auth.login(loginData).subscribe({
      next: (res: any) => {
        const token = res.token;
        this.auth.saveToken(token);
      //  this.toastr.success('Login successful!', 'Success');
      if(res.user){
        localStorage.setItem('userProfile',JSON.stringify(res.user)) ; 
      }
      const role = this.auth.getUserRole();
   if (role === 'Admin') {
          this.router.navigate(['/Admin']);
        } else if (role === 'User') {
          this.router.navigate(['/']);
        } else {
       //   this.toastr.warning('Unknown Role', 'Warning');
        alert("Unknown role. Contact admin.");
        }
      },
       error: err => {
        alert('Invalid Email or Password');
        console.error(err);
      }
    }); 
  }
}



