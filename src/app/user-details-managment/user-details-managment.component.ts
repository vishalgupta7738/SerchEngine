import { Component, numberAttribute } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserDetailsService } from '../UserdDetailsService/user-details.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { UserManagmentService } from '../UserManagmemtService/user-managment.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-user-details-managment',
  imports: [RouterLink , CommonModule , FormsModule,NgxPaginationModule],
  templateUrl: './user-details-managment.component.html',
  styleUrl: './user-details-managment.component.css'
})
export class UserDetailsManagmentComponent {
   page : number = 1 ; // current page 
   itemsPerPage: number = 8;

condition:boolean=false;
  users: any[] = [];
userdata:any={}

senduserdetails={
  userId:0,
  username:'',
  email:'',
  password:'',
  phone_no:0,
  registerdate:'',
  isconfirm:'',

}

  constructor(private userService : UserDetailsService,private http:UserManagmentService){}

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe({
      next:(data) => {
        
        this.users = data;
        console.log("User data : " , data);
      },
      error : (err) => {
        console.error("Error loading user data" , err);
      }
    })
  }
  updateuser()
  {
this.senduserdetails.userId=this.userdata.userId;
this.senduserdetails.username=this.userdata.username;
this.senduserdetails.email=this.userdata.email;
this.senduserdetails.password=this.userdata.password;
this.senduserdetails.phone_no=this.userdata.phone_no;
this.senduserdetails.registerdate=this.userdata.registerdate;
this.senduserdetails.isconfirm=this.userdata.isconfirm;
console.log(this.senduserdetails);
this.http.UpdateUser(this.senduserdetails).subscribe(response=>{
  console.log(response);
  this.ngOnInit();
  this.condition=false;
},error=>{
console.log(error);
}
)

  }
  userDetails(bikedetails:any)
  {
this.userdata={...bikedetails}
this.condition=true;
  }

deleteUser(id:number) {
  console.log("click "+id);
  if (confirm("Are you sure you want to delete this user?")) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
      this.ngOnInit();
    } , error => {
      alert("Error deleting user. Make sure there are no linked records.");
        console.error(error);
    })
  }
}


}
  
