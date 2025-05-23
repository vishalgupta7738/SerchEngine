import { CanActivate,  Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
    
  constructor(private router : Router){}

  canActivate ():boolean{
    const token = localStorage.getItem('jwtToken');

    if(token){
      return true;
    } else {
      this.router.navigate(['/Login'])
      return false;
    }
  }


}