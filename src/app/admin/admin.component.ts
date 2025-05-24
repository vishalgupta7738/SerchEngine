import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RequestService } from '../RequestService/request.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-admin',
  imports: [RouterLink,CommonModule, RouterLink ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers:[RequestService,HttpClient]
})
export class AdminComponent {

  objusercountstore : any = {
    userId : ''
      }

  constructor(private router: Router,private serviceforcount:RequestService) {}


      logout(){
        localStorage.removeItem('jwtToken');
        this.router.navigate(['/Login']);
      }
      
ngOnInit():any
{
  
      this.serviceforcount.GetUserCount().subscribe(data=>
      {
        console.log("success");

     this.objusercountstore.userId= data;
    console.log(data);
   
      }
    )
}
 

 
}
  