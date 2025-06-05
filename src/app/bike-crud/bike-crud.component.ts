import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BikeDataService } from '../Services/bike-data.service';
import { error } from 'console';

@Component({
  selector: 'app-bike-crud',
  standalone: true, 
  imports: [FormsModule, ReactiveFormsModule, CommonModule  , HttpClientModule ],
  templateUrl: './bike-crud.component.html',
  styleUrls: ['./bike-crud.component.css'] 
})

export class BikeCrudComponent {
 
 

//   bikeForm = new FormGroup({
//     bikeName: new FormControl(''),
//     model: new FormControl(''),
//     cc: new FormControl(''),
//     brand: new FormControl(''),
//     price: new FormControl(''),
//     year: new FormControl(''),
//   });

//  constructor(private fb: FormBuilder , private bikeService : BikeDataService){}

  

//  onSubmit(){
 
//   const formData = {
//     bikeName: this.bikeForm.value.bikeName,
//      brand: this.bikeForm.value.brand,
//       cc: Number(this.bikeForm.value.cc),
//     model: this.bikeForm.value.model,
   
   
//     price: Number(this.bikeForm.value.price),
//     year: Number(this.bikeForm.value.year)  
//   }

//  console.log(this.bikeForm.value);  

// this.bikeService.InsertBike(formData).subscribe(
//   next  => {
//     alert('✅ Bike added successfully!');
//     this.bikeForm.reset();
//     console.log(next);
//   },
//   error => {
//     alert('❌ Something went wrong!');
//     console.log(error);
//   }

//  )};
// resetForm(): void {
// this.bikeForm.reset();
// }

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