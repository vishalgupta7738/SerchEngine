import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http : HttpClient) { }

  GetUserCount()
{
  return this.http.get('https://localhost:7183/api/UserCRUD/CountPendingRequest');
}
}
