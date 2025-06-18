import { Component } from '@angular/core';
import { LoginService } from '../LoginService/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-firstlogin',
  imports: [CommonModule,FormsModule],
  templateUrl: './firstlogin.component.html',
  styleUrl: './firstlogin.component.css'
})
export class FirstloginComponent {
   constructor(private loginService : LoginService){}
    Condition:boolean=true;
  data={
email:'',
password:'',
newpass:'',
 
}
OnSubmitPassWord()
{
  
  this.loginService.loginMethod(this.data).subscribe(response=>{
 
  console.log(response);
  alert("PassWord Change Successfully.");
    this.Condition=false;
  },
    error=>{
    alert("Something Wrong Please Try Again");
  }
)

}

}
