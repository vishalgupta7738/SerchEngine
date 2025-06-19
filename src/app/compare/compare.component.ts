
import { Component, OnInit, OnDestroy } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BikeDataService } from '../Services/bike-data.service';
import { CompareServiceService } from '../compare-service.service';



@Component({
  selector: 'app-compare',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.css'
})
export class CompareComponent implements OnInit, OnDestroy {

   brands: string[] = [];
  bikes1: any[] = [];
  bikes2: any[] = [];

  selectedBrand1 = '';
  selectedBrand2 = '';
  bike1: any = null;
  bike2: any = null;

  constructor(private service:CompareServiceService) {}

  ngOnInit() {
    this.service.getBrands().subscribe((res: string[]) => {
      this.brands = res;
    });
  }

  onBrand1Select(): void {
    this.service.getBikesByBrand(this.selectedBrand1).subscribe((res: any[]) => {
      this.bikes1 = res;
    });
  }

  onBrand2Select(): void {
    this.service.getBikesByBrand(this.selectedBrand2).subscribe((res: any[]) => {
      this.bikes2 = res;
    });
  }

 onBike1Select(event: Event): void {
  const value = (event.target as HTMLSelectElement).value;
  const id = parseInt(value, 10);
  this.bike1 = this.bikes1.find(b => b.bikeId === id) || null;
}

onBike2Select(event: Event): void {
  const value = (event.target as HTMLSelectElement).value;
  const id = parseInt(value, 10);
  this.bike2 = this.bikes2.find(b => b.bikeId === id) || null;
}



  ngOnDestroy(): void {
   
  }

  resetCompare(): void {
  this.selectedBrand1 = '';
  this.selectedBrand2 = '';
  this.bikes1 = [];
  this.bikes2 = [];
  this.bike1 = null;
  this.bike2 = null;
}


}
