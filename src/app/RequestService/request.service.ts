import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http : HttpClient) { }

  GetUserCount()
{
  return this.http.get('https://localhost:7183/api/Admin/CountPendingRequest');
}

}
