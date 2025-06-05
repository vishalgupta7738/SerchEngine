import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { BikeDataService } from '../Services/bike-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../search.service';
import { AuthServicesService } from '../LoginService/auth-services.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink,HomeComponent,HttpClientModule,FormsModule,CommonModule],
  standalone:true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers:[HttpClient,BikeDataService,Router,SearchService]
})
export class NavbarComponent {
  searchTerm='';
   valid=false;
  condition=true;
   constructor(http:HttpClient,private Bikeservice:BikeDataService , private route : Router, private searchService:SearchService){ }
 
  searchBike() : void
  {
   if(localStorage.getItem('valid')){
    this.valid=true;
    
   }
   if(localStorage.getItem('passval'))
   {
    console.log("Clicked");
    this.valid=true;
   }
 
    console.log("click");
      if (this.searchTerm.trim()) {
     const userProfile = localStorage.getItem('userProfile'); 
         
        if(userProfile){
          const user = JSON.parse(userProfile); 
          const userId = user.userId; 
          const userconfirm=user.isconfirm;
          console.log("Hello");
          if(userId && userconfirm=='APPROVED'){
            this.searchService.saveSearch(this.searchTerm, userId).subscribe(); 
             console.log("Hello");
          } 
                 this.route.navigate(['/Search'], {
      queryParams: { query: this.searchTerm }
  });
  
  }
       this.route.navigate(['/Search'], {
      queryParams: { query: this.searchTerm }
  });
  console.log(this.searchTerm);
}
}
}