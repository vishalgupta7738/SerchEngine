import { Component, NgModule, OnInit } from '@angular/core';
import { Bike, BikeDataService } from '../Services/bike-data.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {  Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-click-search',
  imports: [CommonModule  , RouterLink,FormsModule],
  templateUrl: './click-search.component.html',
  styleUrl: './click-search.component.css',
  providers:[BikeDataService,HttpClient,Input]
})
export class ClickSearchComponent implements OnInit {
// {


//    searchterm: string = '';
//   bikes: Bike[] = [];
//   filteredBikes: Bike[] = [];
//   isLoading: boolean = false;
//   errorMessage: string = '';

//    constructor(
//     private bikeService: BikeDataService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}
//   ngOnInit(): void {
//     this.route.queryParams.subscribe(params => {
//       this.searchterm = params['query'] || '';
//       if (this.searchterm) {
//         this.performSearch();
//         console.log("Search term: ", this.searchterm);

//       }
//     });
//   }
//    performSearch(): void {
//     this.isLoading = true;
//     this.errorMessage = '';
    

//     this.bikeService.bikesearch(this.searchterm).subscribe({
//       next: (response) => {
//         this.filteredBikes = response.map(bike => ({
//           ...bike,
//           imageUrl: 'data:image/png;base64,' + bike.imageBase64
//         }));
//         this.bikes = this.filteredBikes; 
//         this.bikes = response
//         console.log('Filtered bikes:', this.filteredBikes);

//         this.isLoading = false;
//       },
//       error: (error) => {
//         this.errorMessage = 'Failed to load search results';
//         this.isLoading = false;
//         console.error('Search error:', error);
//       }
//     });
//   }





// }

// mant code 
 searchterm: string = '';
  passvalue: boolean = false;
  bikes: Bike[] = [];
  filteredBikes: Bike[] = [];
  paginatedBikes: Bike[] = [];

  errorMessage: string = '';
  isLoading: boolean = true;

  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 0;
  pageNumbers: number[] = [];

 
  constructor(
    private bikeService: BikeDataService,
    private route: ActivatedRoute,
    private router: Router,http:HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchterm = params['query'] || '';
       this.passvalue=Boolean(params['passvalue']);

// if(this.passvalue==true)
//      if (this.passvalue) {
  
//   this.bikeService.GetBrandBike(this.searchterm).subscribe({
//       next: (response:Bike[]) => {
//         this.filteredBikes = response.map((bike:Bike) => ({
//           ...bike,
//           imageUrl: 'data:image/png;base64,' + bike.imageBase64
//         }));
//         this.bikes = this.filteredBikes; 
//         this.bikes = response
       
//         console.log('Filtered bikes:', this.filteredBikes);

//         this.isLoading = false;
//       },
//       error: (error) => {
//         this.errorMessage = 'Failed to load search results';
//         this.isLoading = false;
//         console.error('Search error:', error);
//       }
//     });
// }

      
      if (this.searchterm) {
        this.performSearch();
        console.log("Search term: ", this.searchterm);   
      }
     }
    );
  
  }
 
 

  performSearch(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.bikeService.bikesearch(this.searchterm).subscribe({
      next: (response) => {
        this.filteredBikes = response.map(bike => ({
          ...bike,
          imageUrl: 'data:image/png;base64,' + bike.imageBase64
        }));
        this.bikes = this.filteredBikes;
        this.currentPage = 1;
        this.updatePaginatedBikes();
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load search results';
        this.isLoading = false;
        console.error('Search error:', error);
      }
    });
  }
  viewBikeDetails(bikeId: number): void {
  this.router.navigate(['/bike-details', bikeId]);
}
  updatePaginatedBikes(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedBikes = this.filteredBikes.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedBikes();
  }
}
