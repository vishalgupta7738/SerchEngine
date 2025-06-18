import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 private apiUrl = 'https://localhost:7183/api/Search' ; 
  constructor( private http : HttpClient) { }


  getSearchHistory(userId: number): Observable<SearchHistory[]> {
  return this.http.get<SearchHistory[]>(`${this.apiUrl}/search-history/${userId}`);
  //
}
getUsersHistory()
{
  return this.http.get('https://localhost:7183/api/Search/AllUserHistory');
}

saveSearch(searchTerm:string, userId?: number): Observable<any> {
 
  const history : SearchHistory = {
    searchId : 0,
    searchDesc : searchTerm,
    userId : userId,
    searchDate : new Date()

 } ; 
 // return this.http.post(`${this.apiUrl}/save-search`,history );
 return this.http.post('https://localhost:7183/api/Search/save-search',history);
 // return this.http.post(`${this.apiUrl}/save-search`,history);
}
searchBike(bikename:string)
{
  return this.http.get('https://localhost:7183/api/Bike/search?query='+bikename);
}

deleteSearchHistory(ids: number[]) {
  return this.http.post('https://localhost:7183/api/Search/DeleteSearchHistory', ids ,{
 responseType: 'text' 
  });
 
}
deleteuser(num:number)
{
 return this.http.delete('https://localhost:7183/api/UserCRUD?id='+num);
}


}
export interface SearchHistory {
  searchId: number;
  searchDesc: string;
  userId?: number;
  searchDate: Date;
  selected?: boolean; 
}