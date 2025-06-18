import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RequestService } from '../RequestService/request.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  
import { OperationButtonComponent } from '../operation-button/operation-button.component';
import { AuthServicesService } from '../LoginService/auth-services.service';

@Component({
  selector: 'app-admin',
  imports: [RouterLink,CommonModule, RouterLink,RouterOutlet,OperationButtonComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers:[RequestService,HttpClient]
})
export class AdminComponent {

  objusercountstore : any = {
    userId : ''
      }



      showLayout = true;
  constructor(private router: Router,private serviceforcount:RequestService,private authService : AuthServicesService ) {};
  
  
      logout(){
       // localStorage.removeItem('jwtToken');
       this.authService.logout(); 
        this.router.navigate(['/Login']);
      }

    

goToBikeOperation() {
  this.router.navigate(['/admin/bike-operation']);
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
  