import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagmentService {

  private UpdateUrl = 'https://localhost:7183/api/UserCRUD';

  constructor(private Http : HttpClient) { }

  UpdateUser(userId : number , user : any)
{
  return this.Http.put(this.UpdateUrl , user)
}

private DeleteUrl = 'https://localhost:7183/api/UserCRUD?id='

DeleteUserById(userId : Number) : Observable<any>
{
  const url = this.DeleteUrl+userId;
  console.log(userId);
  return this.Http.delete(url);
}
ChangeConfirmUserStatuse(UserChangeStatus:{})
{
  return this.Http.put('https://localhost:7183/api/Admin/GetAllUserRequest',UserChangeStatus);
}

accessUserdetails(userId:number)
{
  return this.Http.get('https://localhost:7183/api/UserCRUD/GetUserDetails?userid='+userId);
}

}
