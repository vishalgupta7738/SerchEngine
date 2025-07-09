import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-see-all-history',
  imports: [CommonModule,RouterLink,NgxPaginationModule,FormsModule],
  templateUrl: './see-all-history.component.html',
  styleUrl: './see-all-history.component.css',
  providers:[SearchService,HttpClient]
})
export class SeeAllHistoryComponent {
  
  page : number = 1 ; // current page 
   itemsPerPage: number = 6;

  StoreUsers:any=
  {
    searchId:'',
    searchDesc:'',
    userId:'',
    searchDate:'',
    useremail:''
  }
constructor(private getUserdata:SearchService)
{}
ngOnInit()
{
 this.getUserdata.getUsersHistory().subscribe(response=>{
  this.StoreUsers = response;
 })
}
}
