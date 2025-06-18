import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BikeDataService } from '../Services/bike-data.service';
import { error } from 'console';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-bike-crud',
  standalone: true, 
  imports: [FormsModule, ReactiveFormsModule, CommonModule  , HttpClientModule , RouterLink, NgxPaginationModule ],
  templateUrl: './bike-crud.component.html',
  styleUrls: ['./bike-crud.component.css']  
})

export class BikeCrudComponent {
 
  page : number = 1 ; // current page 
   itemsPerPage: number = 8;

bike = {
    bikename: '',
    model: '',
    cc: 0,
    brand: '',
    price: 0,
    year: 0
  };

  selectedFile: File | null = null;

  constructor(private http: HttpClient,private bikeadd:BikeDataService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
   
  submitForm() {
    const formData = new FormData(); 
    formData.append('bikename', this.bike.bikename);
    formData.append('model', this.bike.model);
     formData.append('cc', this.bike.cc.toString());
    formData.append('brand', this.bike.brand);
    formData.append('price', this.bike.price.toString());
    formData.append('year', this.bike.year.toString());

    if (this.selectedFile) {
      formData.append('imageFile', this.selectedFile);
    }

    this.http.post('https://localhost:7183/api/Image/add', formData).subscribe({
      next: (res) => {
        alert('Bike added successfully!');
      },
      error: (err) => {
        console.error(err);
        alert('Error while adding bike.');
      }
    });
  }

}