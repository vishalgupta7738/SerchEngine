

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BikeDataService } from '../Services/bike-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
  constructor(private bikebrand: BikeDataService, private route: Router) {}

  bikeBrand = [
    {
      name: 'Royal Enfield',
      logo: '/Brandlogo/Royal.png',
      link: 'https://www.royalenfield.com/'
    },
    {
      name: 'Bajaj',
      logo: '/Brandlogo/bajaj.png',
      link: 'https://www.bajajauto.com/'
    },
    {
      name: 'Honda',
      logo: '/Brandlogo/honda.png',
      link: 'https://www.honda2wheelersindia.com/'
    },
    {
      name: 'TVS',
      logo: '/Brandlogo/Tvs.jpg',
      link: 'https://www.tvsmotor.com/'
    },
    {
      name: 'Yamaha',
      logo: '/Brandlogo/Yamaha.png',
      link: 'https://www.yamaha-motor-india.com/'
    },
    {
      name: 'Hero',
      logo: '/Brandlogo/Hero.png',
      link: 'https://www.heromotocorp.com/'
    },
    {
      name: 'KTM',
      logo: '/Brandlogo/ktm.png',
      link: 'https://www.ktmindia.com/'
    },
    {
      name: 'Kawasaki',
      logo: '/Brandlogo/kawasaki.png',
      link: 'https://kawasaki-india.com/'
    },
    {
      name: 'Suzuki',
      logo: '/Brandlogo/Suzuki.png',
      link: 'https://www.suzukimotorcycle.co.in/'
    },
    {
      name: 'Triumph',
      logo: '/Brandlogo/triumph.png',
      link: 'https://www.triumphmotorcycles.in/'
    }
  ];
}
