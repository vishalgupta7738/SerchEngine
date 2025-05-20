import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule  , RouterLink , FormsModule , CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router){

  }
   loginSuccess = false;

  LoginForm= new FormGroup({
    EmailID : new FormControl(''),
    PassWord : new FormControl('')
  });

  LoginSubmit(){
    console.log(this.LoginForm.value);
    
    const email = this.LoginForm.value.EmailID;
    const Pass = this.LoginForm.value.PassWord;

    if(email === 'vg9434120@gmail.com' && Pass === '1234')
      {
        this.loginSuccess = true;
        console.log('correct');
        this.router.navigate(['/Admin']);
        // localStorage.setItem('admin','true');
      } else {

        this.loginSuccess = false;

      }

  }


}

// class AuthGuard implements CanActivate{
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
//     if(localStorage.getItem('admin')=== 'true'){
//       return true;
//     }
//   }


