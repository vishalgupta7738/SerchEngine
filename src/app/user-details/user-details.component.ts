import { Component } from '@angular/core';
import { UserDetailsService } from '../UserdDetailsService/user-details.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { error } from 'node:console';

@Component({
  selector: 'app-user-details',
  imports: [FormsModule , CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  Users : any[] = [];

  constructor(private userservices : UserDetailsService){}

  ngOnInit(){
    this.userservices.getUserDetails().subscribe({
      next : data => this.Users = data,
    
     error: err => console.error(err)

    })
  }

}
