import { Component } from '@angular/core';
import { TrendingBikeComponent } from '../trending-bike/trending-bike.component';
import { FooterComponent } from '../footer/footer.component';
import { BrandComponent } from '../brand/brand.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [TrendingBikeComponent, FooterComponent, BrandComponent , RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
