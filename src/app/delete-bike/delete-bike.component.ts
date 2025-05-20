import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-bike',
  imports: [FormsModule , CommonModule , ReactiveFormsModule],
  templateUrl: './delete-bike.component.html',
  styleUrl: './delete-bike.component.css'
})
export class DeleteBikeComponent {

  deleteForm = new FormGroup({
    Id : new FormControl(''),
  })

  onDelete() {
    console.log(this.deleteForm.value);
  }
  resetForm(){
    this.deleteForm.reset();
  }



}
