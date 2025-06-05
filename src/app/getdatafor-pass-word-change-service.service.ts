import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataforPassWordChangeServiceService {

private updateUrl = 'https://localhost:7183/api/User/UserFirstLogin';

    constructor(private http :HttpClient) {}
GetDataForPass(Userdata={}){
 // console.log(Userdata);
 // console.log('data in service');

  return this.http.put(this.updateUrl ,Userdata);
}

GetUserCount()
{
  return this.http.get('https://localhost:7069/api/ValuesController1/CountPendingRequest');
}
GetCountAllUser()
{
  return this.http.get('https://localhost:7183/api/ReportGenerate/GetAllUserRequest');
}
GetCountApprovedReq()
{
 return this.http.get('https://localhost:7183/api/ReportGenerate/ApprovedCount');
}
getCountPendingReq()
{
return this.http.get('https://localhost:7183/api/ReportGenerate/PendingCount');
}
getCountRejectReq()
{
return this.http.get('https://localhost:7183/api/ReportGenerate/RejectCount');
}
getBikeNameAndCount()
{
return this.http.get('https://localhost:7183/api/ReportGenerate/SearchCount');
}
ChangeConfirmUserStatuse(UserChangeStatus:{})
{
  return this.http.put('https://localhost:7069/api/ValuesController1/AllUserDetails',UserChangeStatus);
}
getUserdata()
{
  return this.http.get('https://localhost:7069/api/ValuesController1/GetAllUserRequest');
}
}
