import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {


private apiUrl = 'https://localhost:7183/api/LoginJwt/Login';
  private tokenKey = 'auth_token';
  private roleKey = 'userRole';
 
  
private loginStatus = new BehaviorSubject<boolean>(false);
  loginStatus$ = this.loginStatus.asObservable();

private userRoleSubject = new BehaviorSubject<string | null>(null);
  userRole$ = this.userRoleSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    // Access localStorage inside constructor (safe)
   
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem(this.tokenKey);
      const role = localStorage.getItem(this.roleKey);
      if (token) {
        this.loginStatus.next(true);
      }
      if (role) {
        this.userRoleSubject.next(role);
      }
    }
  }

    
  
    login(data: any) {
    return this.http.post(this.apiUrl, data);
    }

  saveToken(token: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.tokenKey, token);
      const decoded: any = jwtDecode(token);
      const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      localStorage.setItem(this.roleKey, role);
      this.loginStatus.next(true);
      this.userRoleSubject.next(role);
    }
  }
    getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  getUserRole(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.roleKey);
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem(this.roleKey);
    }
    this.loginStatus.next(false);
    this.userRoleSubject.next(null);
    this.router.navigate(['/#']);
  }
}


export interface User {
  userId: number;
  username: string;
  email: string;
  password: string;
  phoneNo: number;
  registerDate: string;
  isConfirm: string;
} 

