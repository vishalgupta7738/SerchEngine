import { Component, OnInit } from '@angular/core';
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
export class ClickSearchComponent implements OnInit
{

   searchterm: string = '';
  bikes: Bike[] = [];
  filteredBikes: Bike[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

   constructor(
    private bikeService: BikeDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchterm = params['query'] || '';
      if (this.searchterm) {
        this.performSearch();
        console.log("Search term: ", this.searchterm);

      }
    });
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
        this.bikes = response
        console.log('Filtered bikes:', this.filteredBikes);

        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load search results';
        this.isLoading = false;
        console.error('Search error:', error);
      }
    });
  }





}