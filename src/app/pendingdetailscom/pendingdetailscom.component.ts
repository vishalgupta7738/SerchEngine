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
  isconfirm:''}


Users:any={
  email:'',
  isconfirm:'',
  password:'',
  
phone_no:'',
registerdate:'',
  userId:'',
username:'',
}
ngOnInit(){
    this.userservices.getPendingRequest().subscribe(data=>{
      this.Users=data;
      console.log(data);
    })

  


  };
    ApprovedUser(event:Event)
{
  
 const buttonval=event.target as HTMLButtonElement;
 this.StatusChangeObj.email=buttonval.value;
 //console.log(buttonval.value);
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
