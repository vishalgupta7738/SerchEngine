import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { BikeDataService } from '../Services/bike-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../search.service';
import { AuthServicesService } from '../LoginService/auth-services.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink,HomeComponent,HttpClientModule,FormsModule,CommonModule],
  standalone:true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers:[HttpClient,BikeDataService,Router,SearchService]
})
export class NavbarComponent  implements OnInit {
 isLoggedIn: boolean = false;
  userRole: string | null = '';

   constructor(http:HttpClient,private Bikeservice:BikeDataService , private route : Router, private searchService:SearchService,private authService:AuthServicesService, private toastr: ToastrService){ }
  ngOnInit(): void {
   this.isLoggedIn = this.authService.isLoggedIn();
    this.userRole = this.authService.getUserRole();
// by me 
    if (this.isLoggedIn && this.userRole === 'Admin' && this.route.url !== '/Admin') {
  this.route.navigate(['/Admin']);
   }
   
    // On login/logout
    this.authService.loginStatus$.subscribe(status => {
      this.isLoggedIn = status;
      this.userRole = this.authService.getUserRole();
    });
  }
    logout() {
    this.authService.logout();
    // toaster service step -> 1st .npm install @angular/animations. 2nd . add in constructor taster services .  
       this.toastr.info('Logged out successfully', 'Info');

     this.route.navigate(['/']);
  }


  // Add this method to your NavbarComponent class
handleCompareClick(): void {
  if (!this.isLoggedIn) {
    // Show alert for guest users
   // alert('Please login first to use the compare feature');
    this.toastr.warning('Please login first to use the compare feature', 'Login Required');
    this.route.navigate(['/Login']);
  } else {
    // Navigate to compare page for logged-in users
    this.route.navigate(['/Compare']);
  }
}
  // Vishal  ji kaa code niche kaa 
  
  searchTerm='';
   valid=false;
  condition=true;

  // mantu code 
  showMobileSearch: boolean = false;

toggleMobileSearch() {
  this.showMobileSearch = !this.showMobileSearch;
}
  searchBike() : void
  {
    if(this.searchTerm=='')
    {
      alert("Please Enter Bike Name.");
    }
    else
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
         console.log(user.email);
       
          const userId = user.userId; 
          const userconfirm=user.isconfirm;
          if(userId && userconfirm=='APPROVED'){
            this.searchService.saveSearch(this.searchTerm, userId,user.email).subscribe();  
          } 
                 this.route.navigate(['/Search'], {
      queryParams: { query: this.searchTerm }
    
  });

  }
       this.route.navigate(['/Search'], {
      queryParams: { query: this.searchTerm }
  });
    this.searchTerm='';
  console.log(this.searchTerm);
}
}
  }
}