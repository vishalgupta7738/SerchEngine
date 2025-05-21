import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeDataService {
   private apiUrl = 'https://localhost:7183/api/Bike';

  constructor(private Http : HttpClient) { }

  getAllBikes(): Observable<any>{
    return this.Http.get(this.apiUrl);
  }

  // post
  private InsertUrl = 'https://localhost:7183/api/Bike';

  InsertBike(bike : any) : Observable<any>{
    return this.Http.post(this.InsertUrl , bike);
  }


  //update
   private UpdateUrl = 'https://localhost:7183/api/Bike';

  UpdateBike(bikeId : number , bike : any )
  {
    
    return this.Http.put(this.UpdateUrl , bike);

  }

  // GetBikeById(bikeId : number) : Observable<any>{
  //   return this.Http.get(`https://localhost:7183/api/Bike/${bikeId}`)
  // }

  
      private DeleteUrl = 'https://localhost:7183/api/Bike';
  
     deleteBikeById(bikeId : number) : Observable<any>
     {
          // return this.Http.delete(`https://localhost:7183/api/Bike/${bikeId}`);

          const url = (`${this.DeleteUrl}/${bikeId}`);
          console.log(bikeId);
          return this.Http.delete(url);
     }
     
  }


