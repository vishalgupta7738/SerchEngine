import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthServicesService } from './LoginService/auth-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthServicesService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const token = this.authService.getToken();
    const role = this.authService.getUserRole();

    if (token && role) {
      if (!expectedRole || role === expectedRole) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    }

    this.router.navigate(['/Login']);
    return false;
  }
}
