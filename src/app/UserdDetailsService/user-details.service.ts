import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private ApiUrl = 'https://localhost:7183/api/UserCRUD';

  constructor(private Http : HttpClient) { }

  getUserDetails() : Observable<any>{
    return this.Http.get(this.ApiUrl);
  }
}
