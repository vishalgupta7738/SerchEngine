import { Component } from '@angular/core';
import { UserDetailsService } from '../UserdDetailsService/user-details.service';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pendingdetailscom',
  imports: [RouterLink , FormsModule , CommonModule],
  templateUrl: './pendingdetailscom.component.html',
  styleUrl: './pendingdetailscom.component.css',
  providers:[UserDetailsService,HttpClient]
})
export class PendingdetailscomComponent {
   constructor(private userservices : UserDetailsService){}
StatusChangeObj:any={
  email:'',
  isconfirm:'',
  phone_no:'',
}


Users:any=[{
  email:'',
  isconfirm:'',
phone_no:'',
registerdate:'',
  userId:'',
username:'',
}]
ngOnInit(){
    this.userservices.getPendingRequest().subscribe(data=>{
      this.Users=data;
      console.log(data);
    })

  


  };
    ApprovedUser(user:any)
{
  
 //const buttonval=event.target as HTMLButtonElement;
 this.StatusChangeObj.email=user.email;

 //console.log(buttonval.value);
 this.StatusChangeObj.isconfirm='approved';
this.StatusChangeObj.phone_no=user.phone_no;
  console.log(this.StatusChangeObj);

 this.userservices.ChangeConfirmUserStatuse(this.StatusChangeObj).subscribe(response=>{
console.log(response);
this.ngOnInit();
 });
}
RejectUser(user:any)
{
  //const buttonval=event.target as HTMLButtonElement;
 // console.log(buttonval);
 this.StatusChangeObj.email=user.email;
 this.StatusChangeObj.isconfirm='Reject';
 this.StatusChangeObj.phone_no=user.phone_no;
 console.log(this.StatusChangeObj);
  this.userservices.ChangeConfirmUserStatuse(this.StatusChangeObj).subscribe(response=>{
    console.log(response);
  this.ngOnInit();
 });

}


}
