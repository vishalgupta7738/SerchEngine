import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private baseUrl = 'https://localhost:7183/api/LoginJwt/Login';

  constructor(private Http : HttpClient) { }

  login( credentials : {Email: string; Password : string}) : Observable<any>{
    return this.Http.post(`https://localhost:7183/api/LoginJwt/Login` , credentials);

    

  }


}
