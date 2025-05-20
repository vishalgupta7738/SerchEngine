import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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

  bikeForm = new FormGroup({
    bikeName: new FormControl(''),
    model: new FormControl(''),
    cc: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    year: new FormControl(''),
  });

 constructor(private fb: FormBuilder , private bikeService : BikeDataService){}

 onSubmit(){
  const formData = {
    bikeName: this.bikeForm.value.bikeName,
    model: this.bikeForm.value.model,
    cc: Number(this.bikeForm.value.cc),
    brand: this.bikeForm.value.brand,
    price: Number(this.bikeForm.value.price),
    year: Number(this.bikeForm.value.year)
  }

 console.log(this.bikeForm.value);  

this.bikeService.InsertBike(formData).subscribe(
  next  => {
    alert('✅ Bike added successfully!');
    this.bikeForm.reset();
    console.log(next);
  },
  error => {
    alert('❌ Something went wrong!');
    console.log(error);
  }
  
);
}




resetForm(): void {
this.bikeForm.reset();
}



}


