import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BikeDataService } from '../Services/bike-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-operation-button',
  imports: [RouterLink  , HttpClientModule , FormsModule , CommonModule, NgxPaginationModule] ,
  templateUrl: './operation-button.component.html',
  styleUrl: './operation-button.component.css'
})
export class OperationButtonComponent implements OnInit{

  page : number = 1 ; // current page 
  itemsPerPage: number = 8;

bikes:any[] = [];
bikedata:any={}
Condition:boolean=false;
 bikeobj : any={
    bikeId:'',
  bikeName:'',
  model:'',
  cc:'',
  brand:'',
  price:'',
  year:'',
  imageBase64:''
  }
constructor(private bikeService : BikeDataService){}

ngOnInit(): void {
  this.LoadBikes();
}
UpdateBike()
{
this.bikeobj.bikeId=this.bikedata.bikeId;
this.bikeobj.bikeName=this.bikedata.bikeName;
this.bikeobj.model=this.bikedata.model;
this.bikeobj.cc=this.bikedata.cc;
this.bikeobj.brand=this.bikedata.brand;
this.bikeobj.price=this.bikedata.price;
this.bikeobj.year=this.bikedata.year;
this.bikeobj.imageBase64='asdfghjfdsrthjbvcfdsertyuj';

console.log(this.bikeobj);
 // console.log(this.bikedata );
  this.bikeService.UpdateBike(this.bikeobj).subscribe(response=>{
    console.log(response);
    this.LoadBikes();
    this.Condition=false;
  },error=>{
    console.log(error);
  }
)
}

GetBikeDetails(bike:any)
{
 this.bikedata={...bike };
 this.Condition=true;

console.log("this is bike data",this.bikedata); 
      
}
DeleteBike(event:Event)
{
 const isconfirmed=confirm("Are You Want To Delete The Bike?");
 if(isconfirmed)
 {
  const bikeidstore=event.target as HTMLButtonElement;
const Bike=Number(bikeidstore.value);

console.log(Bike);
 this.bikeService.deleteBikeById(Bike).subscribe(response=>{
  console.log(response);
  this.LoadBikes();
},error=>{
 alert("Something Wrong Please Try Again");
}
)

 }
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
