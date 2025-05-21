import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BikeDataService } from '../Services/bike-data.service';
import { error } from 'console';

@Component({
  selector: 'app-delete-bike',
  imports: [FormsModule , CommonModule , ReactiveFormsModule],
  templateUrl: './delete-bike.component.html',
  styleUrl: './delete-bike.component.css'
})
export class DeleteBikeComponent {

constructor(private bikeService : BikeDataService){}

  deleteForm = new FormGroup({
    Id : new FormControl(),
  })

  onDelete(){
    const bikeId = this.deleteForm.value.Id
    
    this.bikeService.deleteBikeById(Number(bikeId)).subscribe(
      next => {
        alert('✅ Bike deleted successfully!');
        this.deleteForm.reset();
        console.log(next);
      },
      error => {
        alert('❌ Failed to delete bike!');
        console.log(error);
      }
    );
  }

  resetForm(){
    this.deleteForm.reset();
  }



}
