import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthServicesService } from '../LoginService/auth-services.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
 userDetails: any;
isEditMode = false; 

editableUser: any = {}; // when user edit youself
 
  constructor(private router : Router, private authService : AuthServicesService , private toaster : ToastrService  , private http : HttpClient) {
 const userJson = localStorage.getItem('userProfile');
    this.userDetails = userJson ? JSON.parse(userJson) : {};

  }
//  CancelEditmode(data:string){
//   this.userDetails.username = data;
//   this.isEditMode = false;
  
//  }
  enableEdit():void{
    this.isEditMode = true; 
    this.editableUser = { ...this.userDetails }; // Create a copy for editing
  }
   saveProfile(): void {
    this.http.put('https://localhost:7183/api/UserCRUD', this.editableUser).subscribe(
      (res) => {
        this.toaster.success('Profile updated successfully!', 'Success');
        this.userDetails = { ...this.editableUser }; // Update the userDetails with the edited data
        localStorage.setItem('userProfile', JSON.stringify(this.userDetails));
        this.isEditMode = false;
      },
      (err) => {
        this.toaster.error('Update failed!', 'Error');
      }
    );
  }
   logout(): void {
    this.authService.logout();
    this.toaster.info('Logged out successfully', 'Info');
    this.router.navigate(['/']);
  }

}
