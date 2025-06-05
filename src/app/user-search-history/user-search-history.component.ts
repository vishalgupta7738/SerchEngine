import { Component, OnInit } from '@angular/core';
import { SearchHistory, SearchService } from '../search.service';
import { AuthServicesService } from '../LoginService/auth-services.service';
import { using } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-search-history',
  imports: [CommonModule],
  templateUrl: './user-search-history.component.html',
  styleUrl: './user-search-history.component.css'
})
export class UserSearchHistoryComponent implements OnInit {
    searchHistory : SearchHistory[] = []; 
    constructor( private serchService : SearchService){}
    ngOnInit() : void {
      const userProfile= localStorage.getItem('userProfile') ; 
      if(userProfile){
           const user = JSON.parse(userProfile) ; 
           const userId = user.userId; 

           this.serchService.getSearchHistory(userId).subscribe({
            next : (data : SearchHistory[]) => {
              this.searchHistory = data ; 
            },
            error : err => {
              console.error('Error Loading Search History', err); 
            }
           }) ; 
      }
      else{
        console.warn('No User logged in') ; 
      }
    }
}
