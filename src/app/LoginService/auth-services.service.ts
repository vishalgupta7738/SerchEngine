import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
 // Vishal
private currentUser: User | null = null;
  constructor() { }

   setUser(user: User) : void {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user)); // optional
  }

    getCurrentUser(): User | null {
    if (!this.currentUser) {
      const userStr = localStorage.getItem('currentUser');
      if (userStr) {
        this.currentUser = JSON.parse(userStr);
      }
    }
    return this.currentUser;
  }
   getCurrentUserId(): number | null {
      const user = this.getCurrentUser();
    return user?.userId || null;
  }
 logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }
  
  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
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

