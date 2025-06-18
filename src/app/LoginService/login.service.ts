import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private baseUrl = 'https://localhost:7183/api/LoginJwt/Login';

  constructor(private Http : HttpClient) { }

  login( credentials ={}) : Observable<any>{
    return this.Http.post('https://localhost:7183/api/LoginJwt/Login', credentials);
}

private updateUrl = 'https://localhost:7183/api/User/UserFirstLogin';
GetDataForPass(Userdata={}){
 return this.Http.put(this.updateUrl ,Userdata);

  }
   loginMethod(firstuserlogin={})
  {
    return this.Http.put('https://localhost:7183/api/User/UserFirstLogin',firstuserlogin);
  }
}






