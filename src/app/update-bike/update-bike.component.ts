import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule , FormBuilder } from '@angular/forms';
import { BikeDataService } from '../Services/bike-data.service';
import { error } from 'console';

@Component({
  selector: 'app-update-bike',
  imports: [FormsModule , ReactiveFormsModule ],
  templateUrl: './update-bike.component.html',
  styleUrl: './update-bike.component.css'
})
export class UpdateBikeComponent {
  selectId: number = 0;         
  editMode: boolean = true;
 constructor(private fb: FormBuilder , private bikeService : BikeDataService){}

UpdateForm = new FormGroup({
    bikeId : new FormControl(''),
    bikeName: new FormControl(''),
    model: new FormControl(''),
    cc: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    year: new FormControl(''),
  });

 onSubmit(){
console.log(this.UpdateForm.value);  

const formData = this.UpdateForm.value;
this.selectId = Number(formData.bikeId);
this.editMode = true;

if(this.editMode)
{
  this.bikeService.UpdateBike(this.selectId , formData).subscribe(
    next => {
      alert('✅ Bike updated!');
      this.UpdateForm.reset();
      this.editMode = false;
      console.log(next);
    
    },
    error => {alert('❌ Update failed!')
    }
  );

}
}

// searchId(){
//   const bikeId  = Number(this.UpdateForm.value.bikeId);

//   this.bikeService.GetBikeById(bikeId).subscribe({
//     next:(data) => {
//       this.UpdateForm.patchValue({
//         bikeName: data.bikeName,
//         model: data.model,
//         cc: data.cc,
//         brand: data.brand,
//         price: data.price,
//         year: data.year
//       })
//     },
//     error:(err) => {
//       alert("❌ Bike not found or error occurred");
//       console.log(error);
//     }
//   })
  
// }


resetForm(): void {
this.UpdateForm.reset();
}


}
