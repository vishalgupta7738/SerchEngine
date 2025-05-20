import { Component , OnInit  } from '@angular/core';
import { BikeDataService } from '../Services/bike-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bike-list',
  standalone:true,
  imports: [FormsModule , CommonModule , HttpClientModule ],
  templateUrl: './bike-list.component.html',
   styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit{

Bikes : any[] = [];

constructor(private bikeService : BikeDataService){}

ngOnInit(){
  this.bikeService.getAllBikes().subscribe({
    next: data => this.Bikes = data,
    // error: err => console.error(err)

  });
}


}
