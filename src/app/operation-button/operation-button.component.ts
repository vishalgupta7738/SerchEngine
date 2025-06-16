import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BikeDataService } from '../Services/bike-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-operation-button',
  imports: [RouterLink  , HttpClientModule , FormsModule , CommonModule] ,
  templateUrl: './operation-button.component.html',
  styleUrl: './operation-button.component.css'
})
export class OperationButtonComponent implements OnInit{

bikes:any[] = [];

constructor(private bikeService : BikeDataService){}

ngOnInit(): void {
  this.LoadBikes();
}

LoadBikes() : void{
  this.bikeService.getAllBikes().subscribe({
    next : (data) => {
      this.bikes = data;
      console.log('Bikes fetched' , this.bikes);
    },
    error: (err) => {
      console.error('Error fetching ' , err);
    }
  })
}
}
