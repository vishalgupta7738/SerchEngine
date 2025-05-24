import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Console, error } from 'console';
import { UserManagmentService } from '../UserManagmemtService/user-managment.service';

@Component({
  selector: 'app-user-update',
  imports: [FormsModule , CommonModule , ReactiveFormsModule],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {


  selectId: number = 0;   
  editMode: boolean = true;
 constructor(private fb: FormBuilder , private userManagmentService : UserManagmentService){}


  UpdateForm = new FormGroup({
    userId: new FormControl(),
    username : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    phone_no : new FormControl(),
    registerdate : new FormControl(''),
    isconfirm : new FormControl(''),
  });

  

  onSubmit(){
    console.log(this.UpdateForm.value);

    const formData = this.UpdateForm.value;
    this.selectId = Number(formData.userId);
    this.editMode = true;

    if(this.editMode){
      this.userManagmentService.UpdateUser(this.selectId , formData).subscribe(
        next => {
          alert('✅ User updated!')
          this.UpdateForm.reset();
          this.editMode = false;
          console.log(next);
        },
        error => {alert('❌ Update failed!')
        console.log(error)
    }
  );
    }
  }
  

  resetForm(){
    this.UpdateForm.reset(); 
  }

}
