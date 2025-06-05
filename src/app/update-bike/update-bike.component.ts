import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule , FormBuilder } from '@angular/forms';
import { BikeDataService } from '../Services/bike-data.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-bike',
  imports: [FormsModule , ReactiveFormsModule,CommonModule ],
  templateUrl: './update-bike.component.html',
  styleUrl: './update-bike.component.css'
})
export class UpdateBikeComponent {
  selectId: number = 0;         
  editMode: boolean = true;
 constructor(private fb: FormBuilder , private bikeService : BikeDataService){}
condition:boolean=false;
// UpdateForm = new FormGroup({
//     bikeId : new FormControl(''),
//     bikeName: new FormControl(''),
//     model: new FormControl(''),
//     cc: new FormControl(''),
//     brand: new FormControl(''),
//     price: new FormControl(''),
//     year: new FormControl(''),
//   });
   UpdateBike3:any={
    bikeId:'',
    bikeName:'',
     brand:'',
    cc:'', 
    model:'',
    price:'',
    year:'',
    
  }
  UpdateBike:any={
    bikeId:'',
    bikeName:'',
    model:'',
    cc:'',
    brand:'',
    price:'',
    year:'',
    image:''
  }


 onSubmit(){
console.log(this.UpdateBike.value);  

// const formData = this.UpdateBike.value;
// this.selectId = Number(formData.bikeId);
// this.editMode = true;



this.UpdateBike3.bikeId=this.UpdateBike.bikeId;
this.UpdateBike3.bikeName=this.UpdateBike.bikeName;
this.UpdateBike3.model=this.UpdateBike.model;
this.UpdateBike3.cc=this.UpdateBike.cc;
this.UpdateBike3.brand=this.UpdateBike.brand;
this.UpdateBike3.price=this.UpdateBike.price;
this.UpdateBike3.year=this.UpdateBike.year;
  this.bikeService.UpdateBike( this.UpdateBike3).subscribe(
    next => {
      
      alert('✅ Bike updated!');
      this.UpdateBike.reset();
      this.condition=false;

      this.editMode = false;
    //   console.log(next);
     },
    error=>{
         alert("❌ SomeThing Wrong Please Check And Try Again");
         this.condition=false;
    }
  );

}

// }
getdatafromId()
{
  this.condition=true;
 this.bikeService.getdataforupdate(this.UpdateBike.bikeId).subscribe(response=>{
  
  this.UpdateBike=response;
  console.log(response);
  
  
 },
 error=>{
 alert("❌ Bike Id Not Found");
 this.condition=false;
 this.resetForm();
 }

) 


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
  this.UpdateBike.bikeId=0;
  this.condition=false;
//this.UpdateBike.reset();
//  bikeId:'',
//     bikeName:'',
//     model:'',
//     cc:'',
//     brand:'',
//     price:'',
//     year:'',
}


}
