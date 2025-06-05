import { Component, Input} from '@angular/core';
import { TrendingBikeComponent } from '../trending-bike/trending-bike.component';
import { FooterComponent } from '../footer/footer.component';
import { BrandComponent } from '../brand/brand.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BikeDataService } from '../Services/bike-data.service';
import { FormsModule } from '@angular/forms';
import { ClickSearchComponent } from '../click-search/click-search.component';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { Console } from 'console';

@Component({
  selector: 'app-home',
  imports: [TrendingBikeComponent, FooterComponent, BrandComponent ,FormsModule,ClickSearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   searchTerm : string = '';
   condition=true;
   
  constructor(http:HttpClient,private Bikeservice:BikeDataService , private searchService: SearchService , private route : Router)
  { }

  ngOnInit()
  {
     if(localStorage.getItem('valid')){
      localStorage.setItem('passval','true');
   }
  }
  searchBike() : void
  {
      console.log("click");
      this.searchService.searchBike(this.searchTerm);
      if (this.searchTerm.trim()) { 
          const userProfile = localStorage.getItem('userProfile'); 
         
        if(userProfile){
          const user = JSON.parse(userProfile); 
          const userId = user.userId; 
          const userconfirm=user.isconfirm;
          if(userId && userconfirm=="APPROVED"){
            this.searchService.saveSearch(this.searchTerm, userId).subscribe(); 
          }
         
    this.route.navigate(['/Search'], {
      queryParams: { query: this.searchTerm }
    });
    
  }
  }
   this.route.navigate(['/Search'], {
      queryParams: { query: this.searchTerm }
    }); 
}}

   