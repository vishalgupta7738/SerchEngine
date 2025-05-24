import { Component } from '@angular/core';
import { UserDetailsService } from '../UserdDetailsService/user-details.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  imports: [FormsModule , CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
  providers:[UserDetailsService,HttpClient]
})
export class UserDetailsComponent {

  
  StatusChangeObj:any={
  email:'',
  isconfirm:''
}



Users:any={
  email:'',
  isconfirm:'',
  password:'',
  
phone_no:'',
registerdate:'',
  userId:'',
username:'',


}

  constructor(private userservices : UserDetailsService){}

  ngOnInit(){
    this.userservices.getUserDetails().subscribe(data=>{
      this.Users=data;
      console.log(data);
    })


  }
  ApprovedUser(event:Event)
{
  
 const buttonval=event.target as HTMLButtonElement;
 this.StatusChangeObj.email=buttonval.value;
// console.log(buttonval.value);
 this.StatusChangeObj.isconfirm='approved';
  console.log(this.StatusChangeObj);

 this.userservices.ChangeConfirmUserStatuse(this.StatusChangeObj).subscribe(response=>{
console.log(response);
this.ngOnInit();
 });
}
RejectUser(event:Event)
{
  const buttonval=event.target as HTMLButtonElement;
 // console.log(buttonval);
 this.StatusChangeObj.email=buttonval.value;
 this.StatusChangeObj.isconfirm='Reject';
 console.log(this.StatusChangeObj);
  this.userservices.ChangeConfirmUserStatuse(this.StatusChangeObj).subscribe(response=>{
    console.log(response);
  this.ngOnInit();
 });

}
}
