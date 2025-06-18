import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserManagmentService } from '../UserManagmemtService/user-managment.service';
import { error } from 'console';

@Component({
  selector: 'app-user-delete',
  imports: [FormsModule , CommonModule , ReactiveFormsModule ],
  templateUrl: './user-delete.component.html',
  styleUrl: './user-delete.component.css'
})
export class UserDeleteComponent {

  constructor(private userDeleteService : UserManagmentService){}

  deleteForm = new FormGroup({
    userId : new FormControl()
  })

  onSubmit(){
    
    const userId =Number(this.deleteForm.value.userId);
    
    if(this.deleteForm.valid){
      const userId = this.deleteForm.value.userId;
      console.log("Deleting userId with Id : " , userId)
    } else {
      console.warn("Form is invalid");
    }

    this.userDeleteService.DeleteUserById(userId).subscribe(
      next => {
        alert('✅ User deleted successfully!');
        
        this.deleteForm.reset();
        console.log(next);
      },
      error => {
        alert('Failed to delete user');
        console.log(error)
      }
    )};
  

  resetForm(){

    this.deleteForm.reset();

  }

}
