import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompareServiceService {

   constructor(private http: HttpClient) { }

  private api = 'https://localhost:7183/api'; 



  getBrands(): Observable<string[]> {
    return this.http.get<string[]>(`${this.api}/Compare/brands`);
  }

  getBikesByBrand(brand: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/Compare/bikes-by-brand?brand=${brand}`);
  }
}
