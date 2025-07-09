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
  
  // private DeleteUser = 'https://localhost:7183/api/UserCRUD';

  deleteUser(id : number) : Observable<any> {
    return this.Http.delete('https://localhost:7183/api/UserCRUD?id='+ id);
  }


  ChangeConfirmUserStatuse(UserChangeStatus:any={})
  {
  return this.Http.put('https://localhost:7183/api/Email',UserChangeStatus);
  }

UserRegister(userdata={})
{
 return this.Http.post('https://localhost:7183/api/User/UserRegister',userdata);
}


private Penddingurl = 'https://localhost:7183/api/UserCRUD/getuserdata'

getPendingRequest(){
  return this.Http.get(this.Penddingurl)
}

}
