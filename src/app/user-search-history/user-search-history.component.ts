import { Component, OnInit } from '@angular/core';
import { SearchHistory, SearchService } from '../search.service';
import { AuthServicesService } from '../LoginService/auth-services.service';
import { using } from 'rxjs';
import { CommonModule } from '@angular/common';
import { error } from 'node:console';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-user-search-history',
  imports: [CommonModule , FormsModule , RouterLink, NgxPaginationModule],
  templateUrl: './user-search-history.component.html',
  styleUrl: './user-search-history.component.css'
})
export class UserSearchHistoryComponent implements OnInit {
    page  : number = 1; 
    itemPerPage:number = 8; 
  searchHistory : SearchHistory[] = []; 
    selectAll: boolean = false;


    constructor( private serchService : SearchService){}
    ngOnInit() : void {
      const userProfile= localStorage.getItem('userProfile') ; 
      if(userProfile){
           const user = JSON.parse(userProfile) ; 
           const userId = user.userId; 
          
           this.serchService.getSearchHistory(userId).subscribe({
            next : (data : SearchHistory[]) => {
              this.searchHistory = data ; 
              console.log(this.searchHistory);
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
    toggleAll(): void {
    this.searchHistory.forEach(item => (item.selected = this.selectAll));
  }

//   deleteSelected(): void {
//     const selectedIds = this.searchHistory
//       .filter(item => item.selected)
//       .map(item => item.searchId);

//     if (selectedIds.length === 0) {
//       alert('Please select at least one record to delete.');
//       return;
//     }

//    this.serchService.deleteSearchHistory(selectedIds).subscribe({
//   next: (response) => {
//     console.log('Delete response:', response);
//     this.searchHistory = this.searchHistory.filter(item => !item.selected);
//     this.selectAll = false;
//   },
//   error: err => {
//     console.error('Error deleting records', err);
//   }
// });

  }




