import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-see-all-history',
  imports: [CommonModule,RouterLink],
  templateUrl: './see-all-history.component.html',
  styleUrl: './see-all-history.component.css',
  providers:[SearchService,HttpClient]
})
export class SeeAllHistoryComponent {
  

  StoreUsers:any=
  {
    searchId:'',
    searchDesc:'',
    userId:'',
    searchDate:''



  }
constructor(private getUserdata:SearchService)
{}
ngOnInit()
{
 this.getUserdata.getUsersHistory().subscribe(response=>{
  this.StoreUsers=response;
 })
}
}
