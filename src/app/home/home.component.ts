// // mantu code  working properly 
//    import { Component, Input, NgModule} from '@angular/core';
// import { TrendingBikeComponent } from '../trending-bike/trending-bike.component';
// import { FooterComponent } from '../footer/footer.component';
// import { BrandComponent } from '../brand/brand.component';
// import { RouterLink, RouterOutlet } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { Bike, BikeDataService } from '../Services/bike-data.service';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ClickSearchComponent } from '../click-search/click-search.component';
// import { Router } from '@angular/router';
// import { SearchService } from '../search.service';
// import { Console } from 'console';
// import { response } from 'express';
// import { CommonModule } from '@angular/common';
// import { CompareComponent } from '../compare/compare.component';

// @Component({
//   selector: 'app-home',
//   imports: [TrendingBikeComponent, FooterComponent, BrandComponent ,FormsModule,ClickSearchComponent, CommonModule,ReactiveFormsModule,CompareComponent ],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent {
//    searchTerm : string = '';
//    condition=true;
   
//    // filter 
//    bikes: Bike[] = [];
//    filteredBikes: Bike[] = [];
//    selectedFile: File | null = null;
//    isLoading = true;
 
//    selectedBrand = '';
//    selectedPrice = '';
//   selectedYear = '';
//  minPrice: number | null = null;
//  maxPrice: number | null = null;
// // Options for filters
// brands: string[] = [];
// years: number[] = [];
// prices: number[] = [];
// // Pagination 
// currentPage = 1;
// itemsPerPage = 6;


//   constructor(http:HttpClient,private Bikeservice:BikeDataService , private searchService: SearchService , private route : Router)
//   { }

//   ngOnInit() : void
//   {
//    this.loadBikes();
//   }
  

  

//  // api = https://localhost:7183/api/Image/search?keyword=


//   loadBikes() : void{
//     this.isLoading = true;
//     this.Bikeservice.getAllBikes().subscribe({
//       next : (response) => {
//          const bikeList: Bike[] = response.map((bike : Bike) => ({
//           bikeId: bike.bikeId || 0,
//           bikeName: bike.bikeName || 'Unknown',
//           model: bike.model || 'Unknown',
//           cc: bike.cc || 0,
//           brand: bike.brand || 'Unknown',
//           price: bike.price || 0,
//           year: bike.year || 0,
//            imageUrl: 'assets/no-image.png'
       
//         })) ; 
// bikeList.forEach((bike, index) => {
//         this.Bikeservice.getImageByKeyword(bike.bikeName).subscribe({
//           next: (imgResponse) => {
//             if (imgResponse.length > 0 && imgResponse[0].imageBase64) {
//               const base64 = imgResponse[0].imageBase64;
//               bikeList[index].imageUrl = `data:image/jpeg;base64,${base64}`;
//             }
//           },
//           error: () => {
//             console.error(`Image not found for ${bike.bikeName}`);
//           }
//         });
//       });
// this.bikes = bikeList;

//         this.filteredBikes = [...this.bikes] ; 
//         this.extractFilterOptions(); 
//         this.isLoading = false; 
//       }
//     })
//   }



//   viewBikeDetails(bikeId: number): void {
//   this.route.navigate(['/bike-details', bikeId]);
// }
//   extractFilterOptions() : void{
//     this.brands = [...new Set(this.bikes.map(bike => bike.brand))];
//     this.prices = [...new Set(this.bikes.map(bike => Math.floor(bike.price / 10000) * 10000))].sort((a, b) => a - b);
//     this.years = [...new Set(this.bikes.map(bike => bike.year))].sort((a, b) => b - a);
//   }
//   applyFilters(): void {
//     this.filteredBikes = this.bikes.filter(bike => {
//       const matchesSearch = this.searchTerm ? 
//       (bike.bikeName ?.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()) || 
//       bike.model?.toLowerCase().includes(this.searchTerm.toLowerCase())) :
//       true;
//       const matchesBrand = this.selectedBrand ? bike.brand === this.selectedBrand : true;
//       const matchesYear = this.selectedYear ? bike.year === +this.selectedYear : true;
//        const matchesPrice = this.selectedPrice ?
//         Math.floor(bike.price / 10000) * 10000 === +this.selectedPrice :
//         true;
    
//         return matchesSearch && matchesBrand && matchesYear && matchesPrice;
   
//     })
//   }
//   clearFilters(): void {
//     this.searchTerm = '';
//     this.selectedBrand = '';
//     this.selectedYear = '';
//     // this.minPrice = null;
//     // this.maxPrice = null;
//         this.selectedPrice = '';
//     this.applyFilters();
//   }
//   get paginatedBikes(): Bike[] {
//     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//     return this.filteredBikes.slice(startIndex, startIndex + this.itemsPerPage);
//   }

//   get totalPages(): number {
//     return Math.ceil(this.filteredBikes.length / this.itemsPerPage);
//   }

//   changePage(page: number): void {
//     if (page >= 1 && page <= this.totalPages) {
//       this.currentPage = page;
//     }
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
  
// }
//    this.route.navigate(['/Search'], {
//       queryParams: { query: this.searchTerm }
//     }); 
//   }
// }
// }

//  NEW CODE FILTERING MANTU 
import { Component, NgModule, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Bike, BikeDataService } from '../Services/bike-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../search.service';
import { BrandComponent } from '../brand/brand.component';
import { TrendingBikeComponent } from '../trending-bike/trending-bike.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, FormsModule, RouterModule, BrandComponent, TrendingBikeComponent, FooterComponent],
  standalone: true
})
export class HomeComponent implements OnInit {
  bikes = signal<Bike[]>([]);

  // filteredBikes = signal<Bike[]>([]);

  searchTerm: string = '';
  isLoading = true;

  // Filter options
   // Dropdown values
  modelList: string[] = [];
  priceRanges:{ minPrice: number, maxPrice: number }[] = [];
  yearList: number[] = [];  
  // Selected filter values
  selectedModel: string = '';
  selectedPriceRange?: {  minPrice: number; maxPrice: number } = undefined ; 
  model?: string = '';
  year?: number = undefined;

  // Pagination
 pageNumber = 1;
  pageSize = 10;
  // by mantu pagination 
  totalPages: number[] = [];
  totalLoadedPages: number = 1;
  hasNextPage = true;

  constructor(
    private bikeService: BikeDataService,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFilterOptions();
    this.loadBikes();
  }

  loadFilterOptions(): void {
    this.bikeService.getFilterOptions().subscribe((data) => {
        this.modelList = data.models ;
        this.priceRanges = data.prices ; 
          this.yearList = data.years ;
          
    });
  }

  loadBikes(): void {
      const minPrice = this.selectedPriceRange?.minPrice;
    const maxPrice = this.selectedPriceRange?.maxPrice;
    this.isLoading = true;
    this.bikeService
    .getFilteredBikes(minPrice, maxPrice, this.year,this.model, this.pageNumber, this.pageSize)
    .subscribe((data) =>  {
      this.bikes.set(data)
    // mantu code
    this.hasNextPage = data.length === this.pageSize; // Check if there are more bikes to load
    
    if(this.hasNextPage || this.pageNumber === 1) {
      this.totalLoadedPages = this.pageNumber + (this.hasNextPage ? 1 : 0);
      this.totalPages = Array.from({ length: this.totalLoadedPages }, (_, i) => i + 1);
    }
  }
  ); 
  }


  resetFilters(): void {
    this.searchTerm = '';
    this.model = '';
    this.year = undefined;
    this.selectedPriceRange = undefined;
    this.pageNumber = 1;
    this.loadBikes();
  }

  // searchBike(): void {
  //   if (this.searchTerm.trim() === '') {
  //     alert("Please enter a bike name");
  //     return;
  //   }
    
  //   const userProfile = localStorage.getItem('userProfile');
  //   if (userProfile) {
  //     const user = JSON.parse(userProfile);
  //     // if (user.userId && user.isconfirm === "APPROVED") {
  //     //   this.searchService.saveSearch(this.searchTerm, user.userId).subscribe();
  //     // }
  //  if (user?.userId && user?.isconfirm === "APPROVED") {
  //     this.searchService.saveSearch(this.searchTerm, user.userId).subscribe();
  //   }

  //   }

  //   this.router.navigate(['/Search'], {
  //     queryParams: { query: this.searchTerm }
  //   });
  // }

  // mantu code 
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
          
          console.log("USer Details : userProfile",userProfile);

          if(userId && userconfirm=="APPROVED"){
            this.searchService.saveSearch(this.searchTerm, userId).subscribe(); 
          }
         
    this.router.navigate(['/Search'], {
      queryParams: { query: this.searchTerm }
    });
    
  }
      this.router.navigate(['/Search'], {
      queryParams: { query: this.searchTerm }
    });
}
    }
  }
  viewBikeDetails(bikeId: number): void {
    this.router.navigate(['/bike-details', bikeId]);
  }

  prevPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.loadBikes();
    }
  }
  nextPage() {
    this.pageNumber++;
    this.loadBikes();
  }

  changePage(page: number): void {
  this.pageNumber = page;
  this.loadBikes();
}
}