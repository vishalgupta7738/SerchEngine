// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { BikeDataService } from '../Services/bike-data.service';
// import { Bike } from '../Services/bike-data.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-bike-details',
//   templateUrl: './bike-details.component.html',
//   imports : [FormsModule,CommonModule],
//   styleUrls: ['./bike-details.component.css']
// })
// export class BikeDetailsComponent implements OnInit {
//   bike: Bike | undefined;
//   isLoading = true;
//  imageError = false;
//   constructor(
//     private route: ActivatedRoute,
//     private bikeService: BikeDataService
//   ) { }

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//         console.log('Fetching bike details for ID:', id);
//       this.bikeService.getdataforupdate(+id).subscribe({
//         next: (response: any) => {
//            console.log('API Response:', response);
//           this.bike = {
//             bikeId: response.bikeId,
//             bikeName: response.bikeName,
//             model: response.model,
//             cc: response.cc,
//             brand: response.brand,
//             price: response.price,
//             year: response.year,
//           //  imageUrl: response.imageBase64 ? 'data:image/jpeg;base64,' + response.imageBase64 : 'assets/no-image.png'
//          imageBase64: response.imageBase64 || '', // Add this line
//          imageUrl: response.imageBase64 ? 'data:image/jpeg;base64,' + response.imageBase64 : 'assets/no-image.png'
//         };
//           this.isLoading = false;
//         },
//         error: (error) => {
//           console.error('Error fetching bike details:', error);
//           this.isLoading = false;
//         }
//       });
//     }
//   }

//    handleImageError() {
//     this.imageError = true;
//     if (this.bike) {
//       this.bike.imageUrl = 'assets/no-image.png';
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BikeDataService } from '../Services/bike-data.service';
import { Bike } from '../Services/bike-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bike-details',
  imports : [CommonModule,FormsModule , RouterLink],
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {
  bike: Bike | undefined;
  isLoading = true;
  imageError = false;

  constructor(
    private route: ActivatedRoute,
    private bikeService: BikeDataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadBikeDetails(+id);
    }
  }

  private loadBikeDetails(id: number): void {
    this.bikeService.getdataforupdate(id).subscribe({
      next: (response: any) => {
        this.processBikeResponse(response);
      },
      error: (error) => {
        console.error('Error fetching bike details:', error);
        this.isLoading = false;
      }
    });
  }

  private processBikeResponse(response: any): void {
    const bikeData: Bike = {
      bikeId: response.bikeId,
      bikeName: response.bikeName,
      model: response.model,
      cc: response.cc,
      brand: response.brand,
      price: response.price,
      year: response.year,
      imageBase64: response.imageBase64,
      imageUrl: response.imageBase64 
        ? 'data:image/jpeg;base64,' + response.imageBase64 
        : 'assets/no-image.png'
    };

    // If no image in initial response, try to fetch from search API
    if (!bikeData.imageBase64) {
      this.fetchBikeImage(bikeData);
    } else {
      this.bike = bikeData;
      this.isLoading = false;
    }
  }

  private fetchBikeImage(bikeData: Bike): void {
    this.bikeService.getImageByKeyword(bikeData.bikeName).subscribe({
      next: (imgResponse: any[]) => {
        if (imgResponse && imgResponse.length > 0 && imgResponse[0].imageBase64) {
          bikeData.imageBase64 = imgResponse[0].imageBase64;
          bikeData.imageUrl = 'data:image/jpeg;base64,' + imgResponse[0].imageBase64;
        }
        this.bike = bikeData;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching bike image:', error);
        this.bike = bikeData;
        this.isLoading = false;
      }
    });
  }

  handleImageError(): void {
    this.imageError = true;
    if (this.bike) {
      this.bike.imageUrl = 'assets/no-image.png';
    }
  }
}