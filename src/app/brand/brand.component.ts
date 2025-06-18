import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
import { BikeDataService } from '../Services/bike-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  imports: [CommonModule , FormsModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
constructor(private bikebrand:BikeDataService,private route:Router)
{}
  bikeBrand = [
    {name : 'Royal Enfield', logo:'/Brandlogo/Royal.png'},
    {name : 'Bajaj' , logo:'/Brandlogo/bajaj.png'},
    {name : 'Honda' , logo:'/Brandlogo/honda.png'},
    {name : 'TVS' , logo:'/Brandlogo/Tvs.jpg'},
    {name : 'Yamaha' , logo:'/Brandlogo/Yamaha.png'},
    {name : 'Hero' , logo:'/Brandlogo/Hero.png'},
    {name : 'KTM' , logo:'/Brandlogo/ktm.png'},
    {name : 'Kawasaki' , logo:'/Brandlogo/kawasaki.png'},
    {name : 'Suzuki' , logo:'/Brandlogo/Suzuki.png'},
    {name : 'Triumph' , logo:'/Brandlogo/triumph.png'}

  ];
  // GetBrandBikes(name:string)
  // {
  //   console.log(name);
  //   this.route.navigate(['/Search'],{
  //     queryParams:{query:name,passvalue:true}
      
      
  //   })  
     
  // }

}
