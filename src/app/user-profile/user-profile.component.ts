import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  imports: [CommonModule , RouterLink],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
 userDetails: any;

  constructor(private router : Router) {
 const userJson = localStorage.getItem('userProfile');
    this.userDetails = userJson ? JSON.parse(userJson) : {};

  }

   logout(){
      // localStorage.removeItem('jwtToken');
      localStorage.removeItem('userProfile');
        this.router.navigate(['/userLogout']);
    }

}