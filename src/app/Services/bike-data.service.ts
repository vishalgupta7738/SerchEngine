import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeDataService {
   private apiUrl = 'https://localhost:7183/api/Bike/AllBikes';

  private bikeNameSubject = new BehaviorSubject<string>('');
  bikeName$ = this.bikeNameSubject.asObservable();
  constructor(private Http : HttpClient) { }

  getAllBikes(): Observable<any>{
    return this.Http.get(this.apiUrl);
  }
getImageByKeyword(keyword: string): Observable<any> {
  return this.Http.get(`https://localhost:7183/api/Image/search?keyword=${encodeURIComponent(keyword)}`);
}


  // post
  private InsertUrl = 'https://localhost:7183/api/Bike/add';

  InsertBike(bike : any) : Observable<any>{
    return this.Http.post(this.InsertUrl , bike);
  }


  //update
   private UpdateUrl = 'https://localhost:7183/api/Bike';

  UpdateBike( bike={} )
  {
    
    return this.Http.put(this.UpdateUrl , bike);

  }

  
      private DeleteUrl = 'https://localhost:7183/api/Bike?id=';
  
     deleteBikeById(bikeId : number) : Observable<any>
     {
          // return this.Http.delete(`https://localhost:7183/api/Bike/${bikeId}`);

          const url = (this.DeleteUrl+bikeId);
          // console.log(bikeId);
          return this.Http.delete(url);
     }
     getdataforupdate(id:number)
     {
      return this.Http.get('https://localhost:7183/api/Bike?id='+id);
     }
     bikesearch(name:string)
     {
      return this.Http.get<any[]>('https://localhost:7183/api/Bike/search?query='+name);
     }
     name='';

     bikename(bikename:string)
     {
      this.bikeNameSubject.next(bikename);
        
     }
       GetBrandBike(BrandName:string):Observable<any>
  {
   return this.Http.get('https://localhost:7183/api/Bike/SearchByBrandName?BrandName='+BrandName);
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
  

