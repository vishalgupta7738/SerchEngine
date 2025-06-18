// import { Component, Input} from '@angular/core';
// import { TrendingBikeComponent } from '../trending-bike/trending-bike.component';
// import { FooterComponent } from '../footer/footer.component';
// import { BrandComponent } from '../brand/brand.component';
// import { RouterLink, RouterOutlet } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { BikeDataService } from '../Services/bike-data.service';
// import { FormsModule } from '@angular/forms';
// import { ClickSearchComponent } from '../click-search/click-search.component';
// import { Router } from '@angular/router';
// import { SearchService } from '../search.service';
// import { Console } from 'console';

// @Component({
//   selector: 'app-home',
//   imports: [TrendingBikeComponent, FooterComponent, BrandComponent ,FormsModule,ClickSearchComponent],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent {
//    searchTerm : string = '';
//    condition=true;
   
//   constructor(http:HttpClient,private Bikeservice:BikeDataService , private searchService: SearchService , private route : Router)
//   { }

//   ngOnInit()
//   {
//      if(localStorage.getItem('valid')){
//       localStorage.setItem('passval','true');
//    }
//   }
//   searchBike() : void
//   {
//     if(this.searchTerm=='')
//     {
//       alert("Please Enter Bike Name");
//     }
//     else{
//       console.log("click");
//       this.searchService.searchBike(this.searchTerm);
//       if (this.searchTerm.trim()) { 
//           const userProfile = localStorage.getItem('userProfile'); 
         
//         if(userProfile){
//           const user = JSON.parse(userProfile); 
//           const userId = user.userId; 
//           const userconfirm=user.isconfirm;
//           if(userId && userconfirm=="APPROVED"){
//             this.searchService.saveSearch(this.searchTerm, userId).subscribe(); 
//           }
         
//     this.route.navigate(['/Search'], {
//       queryParams: { query: this.searchTerm }
//     });
    
//   }
//   }
//    this.route.navigate(['/Search'], {
//       queryParams: { query: this.searchTerm }
//     }); 
// }}
// }

   // mantu code  working properly 
   import { Component, Input, NgModule} from '@angular/core';
import { TrendingBikeComponent } from '../trending-bike/trending-bike.component';
import { FooterComponent } from '../footer/footer.component';
import { BrandComponent } from '../brand/brand.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Bike, BikeDataService } from '../Services/bike-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickSearchComponent } from '../click-search/click-search.component';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { Console } from 'console';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [TrendingBikeComponent, FooterComponent, BrandComponent ,FormsModule,ClickSearchComponent, CommonModule,ReactiveFormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   searchTerm : string = '';
   condition=true;
   
   // filter 
   bikes: Bike[] = [];
   filteredBikes: Bike[] = [];
   selectedFile: File | null = null;
   isLoading = true;
 
   selectedBrand = '';
   selectedPrice = '';
  selectedYear = '';
 minPrice: number | null = null;
 maxPrice: number | null = null;
// Options for filters
brands: string[] = [];
years: number[] = [];
prices: number[] = [];
// Pagination 
currentPage = 1;
itemsPerPage = 6;


  constructor(http:HttpClient,private Bikeservice:BikeDataService , private searchService: SearchService , private route : Router)
  { }

  ngOnInit() : void
  {
   this.loadBikes();
  }
  

  

 // api = https://localhost:7183/api/Image/search?keyword=


  loadBikes() : void{
    this.isLoading = true;
    this.Bikeservice.getAllBikes().subscribe({
      next : (response) => {
         const bikeList: Bike[] = response.map((bike : Bike) => ({
     //   this.bikes = response.map((bike : Bike) => ({
          bikeId: bike.bikeId || 0,
          bikeName: bike.bikeName || 'Unknown',
          model: bike.model || 'Unknown',
          cc: bike.cc || 0,
          brand: bike.brand || 'Unknown',
          price: bike.price || 0,
          year: bike.year || 0,
           imageUrl: 'assets/no-image.png'
         //  imageUrl: `https://localhost:7183/api/Image/search?keyword=${encodeURIComponent(bike.bikeName)}`
            //    imageUrl: `https://localhost:7183/api/Image/search?keyword=${encodeURIComponent(bike.bikeName)}`
           // mantu
         // imageUrl: 'data:image/png;base64,' + bike.imageBase64
        //  imageBase64: bike.imageBase64 || '',
       // imageUrl: bike.imageBase64 ? 'data:image/jpeg;base64,' + bike.imageBase64 : 'assets/no-image.png'
        })) ; 
bikeList.forEach((bike, index) => {
        this.Bikeservice.getImageByKeyword(bike.bikeName).subscribe({
          next: (imgResponse) => {
            if (imgResponse.length > 0 && imgResponse[0].imageBase64) {
              const base64 = imgResponse[0].imageBase64;
              bikeList[index].imageUrl = `data:image/jpeg;base64,${base64}`;
            }
          },
          error: () => {
            console.error(`Image not found for ${bike.bikeName}`);
          }
        });
      });
this.bikes = bikeList;

        this.filteredBikes = [...this.bikes] ; 
        this.extractFilterOptions(); 
        this.isLoading = false; 
      }
    })
  }

  extractFilterOptions() : void{
    this.brands = [...new Set(this.bikes.map(bike => bike.brand))];
    this.prices = [...new Set(this.bikes.map(bike => Math.floor(bike.price / 10000) * 10000))].sort((a, b) => a - b);
    this.years = [...new Set(this.bikes.map(bike => bike.year))].sort((a, b) => b - a);
  }
  applyFilters(): void {
    this.filteredBikes = this.bikes.filter(bike => {
      const matchesSearch = this.searchTerm ? 
      (bike.bikeName ?.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()) || 
      bike.model?.toLowerCase().includes(this.searchTerm.toLowerCase())) :
      true;
      const matchesBrand = this.selectedBrand ? bike.brand === this.selectedBrand : true;
      const matchesYear = this.selectedYear ? bike.year === +this.selectedYear : true;
       const matchesPrice = this.selectedPrice ?
        Math.floor(bike.price / 10000) * 10000 === +this.selectedPrice :
        true;
    
        return matchesSearch && matchesBrand && matchesYear && matchesPrice;
   
    })
  }
  clearFilters(): void {
    this.searchTerm = '';
    this.selectedBrand = '';
    this.selectedYear = '';
    // this.minPrice = null;
    // this.maxPrice = null;
        this.selectedPrice = '';
    this.applyFilters();
  }
  get paginatedBikes(): Bike[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredBikes.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredBikes.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  searchBike() : void
  {
    if(this.searchTerm=='')
    {
      alert("Please Enter Bike Name");
    }
    else{
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
  }
}
}

