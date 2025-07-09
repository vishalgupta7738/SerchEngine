// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class BikeDataService {
//    private apiUrl = 'https://localhost:7183/api/Bike/AllBikes';

//   private bikeNameSubject = new BehaviorSubject<string>('');
//   bikeName$ = this.bikeNameSubject.asObservable();
//   constructor(private Http : HttpClient) { }

//   getAllBikes(): Observable<any>{
//     return this.Http.get(this.apiUrl);
//   }
// getImageByKeyword(keyword: string): Observable<any> {
//   return this.Http.get(`https://localhost:7183/api/Image/search?keyword=${encodeURIComponent(keyword)}`);
// }


//   // post
//   private InsertUrl = 'https://localhost:7183/api/Bike/add';

//   InsertBike(bike : any) : Observable<any>{
//     return this.Http.post(this.InsertUrl , bike);
//   }


//   //update
//    private UpdateUrl = 'https://localhost:7183/api/Bike';

//   UpdateBike( bike={} )
//   {
    
//     return this.Http.put(this.UpdateUrl , bike);

//   }

  
//       private DeleteUrl = 'https://localhost:7183/api/Bike?id=';
  
//      deleteBikeById(bikeId : number) : Observable<any>
//      {
//           // return this.Http.delete(`https://localhost:7183/api/Bike/${bikeId}`);

//           const url = (this.DeleteUrl+bikeId);
//           // console.log(bikeId);
//           return this.Http.delete(url);
//      }
//      getdataforupdate(id:number)
//      {
//       return this.Http.get('https://localhost:7183/api/Bike?id='+id);
//      }
//      bikesearch(name:string)
//      {
//       return this.Http.get<any[]>('https://localhost:7183/api/Bike/search?query='+name);
//      }
//      name='';

//      bikename(bikename:string)
//      {
//       this.bikeNameSubject.next(bikename);
        
//      }
//        GetBrandBike(BrandName:string):Observable<any>
//   {
//    return this.Http.get('https://localhost:7183/api/Bike/SearchByBrandName?BrandName='+BrandName);
//   }
     
//   // Fiter bike by mantu 
//  getFilteredBikes(
//   minPrice?: number, 
//   maxPrice?: number, 
//   year?: number, 
//   model?: string, 
//   pageNumber: number = 1, 
//   pageSize: number = 10
// ): Observable<Bike[]> {
//  let params = new HttpParams()
//       .set('pageNumber', pageNumber)
//       .set('pageSize', pageSize);

//        if (minPrice != null) params = params.set('minPrice', minPrice);
//     if (maxPrice != null) params = params.set('maxPrice', maxPrice);
//     if (year != null) params = params.set('year', year);
//     if (model) params = params.set('model', model);
//   return this.Http.get<Bike[]>('https://localhost:7183/api/Bike/filter', { params });
// }
//   // code for Dropdown filter options
// getFilterOptions(): Observable<any> {
//   return this.Http.get('https://localhost:7183/api/Bike/filter-options');
// }

//   }


//   export interface Bike {
//   bikeId: number;
//   bikeName: string;
//   model: string;
//   cc: number;
//   brand: string;
 
//   price: number;
//   year: number;
//  imageBase64?: string;
//  imageUrl?: string; 
// }
  // new Code Snippet
  import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeDataService {
  private apiUrl = 'https://localhost:7183/api/Bike';

  private bikeNameSubject = new BehaviorSubject<string>('');
  bikeName$ = this.bikeNameSubject.asObservable();

  constructor(private http: HttpClient) { }


getFilteredBikes(
  minPrice?: number, 
  maxPrice?: number, 
  year?: number, 
  model?: string, 
  pageNumber: number = 1, 
  pageSize: number = 10
): Observable<Bike[]> {
  let params = new HttpParams()
    .set('pageNumber', pageNumber)
    .set('pageSize', pageSize);

  if (minPrice != null) params = params.set('minPrice', minPrice);
  if (maxPrice != null) params = params.set('maxPrice', maxPrice);
  if (year != null) params = params.set('year', year);
  if (model) params = params.set('model', model);

  return this.http.get<Bike[]>(
    'https://localhost:7183/api/Bike/filter',
    { params }
  );
}

  getFilterOptions(): Observable<{
    models: string[],
    years: number[],
    prices: { minPrice: number, maxPrice: number }[]
  }> {
    return this.http.get<{
      models: string[],
      years: number[],
      prices: { minPrice: number, maxPrice: number }[]
    }>(`${this.apiUrl}/filter-options`);
  }

  getImageByKeyword(keyword: string): Observable<any> {
    return this.http.get(`https://localhost:7183/api/Image/search?keyword=${encodeURIComponent(keyword)}`);
  }

  getAllBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(`${this.apiUrl}/AllBikes`);
  }

  getBikeDetails(bikeId: number): Observable<Bike> {
    return this.http.get<Bike>(`${this.apiUrl}/${bikeId}`);
  }

  private DeleteUrl = 'https://localhost:7183/api/Bike?id=';
  
  deleteBikeById(bikeId: number): Observable<any> {
    const url = (this.DeleteUrl + bikeId);
    return this.http.delete(url);
  }

  InsertBike(bike: Bike): Observable<Bike> {
    return this.http.post<Bike>(`${this.apiUrl}/add`, bike);
  }

  UpdateBike(bike: Bike): Observable<Bike> {
    return this.http.put<Bike>(`${this.apiUrl}`, bike);
  }
  
  getdataforupdate(id: number) {
    return this.http.get('https://localhost:7183/api/Bike?id=' + id);
  }

  bikesearch(name: string) {
    return this.http.get<any[]>('https://localhost:7183/api/Bike/search?query=' + name);
  }
}

export interface Bike {
  bikeId: number;
  bikeName: string;
  model: string;
  cc: number;
  brand: string;
  price: number;
  year: number;
  imageBase64?: string;
  imageUrl?: string;
}