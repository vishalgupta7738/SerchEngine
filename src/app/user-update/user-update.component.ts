import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Console, error } from 'console';
import { UserManagmentService } from '../UserManagmemtService/user-managment.service';

@Component({
  selector: 'app-user-update',
  imports: [FormsModule , CommonModule ],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {

condition:boolean=false;

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

// UpdateUser2:any={
//     userId:'',
//     username:'',
//     email:'',
//     password:'',
//     phone_no:'',
//     registerdate:'',
//     isconfirm:'',
//   }


  UpdateUser:any={
    userId:'',
    username:'',
    email:'',
    password:'',
    phone_no:'',
    registerdate:'',
    isconfirm:'',
  }
  

  onSubmit(){
    console.log(this.UpdateForm.value);

    const formData = this.UpdateForm.value;
    this.selectId = Number(formData.userId);
    this.editMode = true;

    if(this.editMode){
  //     this.userManagmentService.UpdateUser(this.selectId , this.UpdateUser).subscribe(
  //       next => {
  //         alert('✅ User updated!')
  //         this.editMode = false;
  //          this.resetForm();
  //           this.condition=false;
         
  //       },
  //       error => {alert('❌ Update failed!')
  //       console.log(error)
  //   }
  // );
    }
  }
  UserDetails()
  {
    this.condition=true;
    this.userManagmentService.accessUserdetails(this.UpdateUser.userId).subscribe(response=>{

      console.log(response);
      this.UpdateUser=response;
     
      
    },
    error=>{
      alert('❌ User Not Found.');
      this.condition=false;
      this.resetForm();
    }
  )

  }



  resetForm(){
    //this.UpdateForm.reset(); 
    this.UpdateUser=0;
  }

}
