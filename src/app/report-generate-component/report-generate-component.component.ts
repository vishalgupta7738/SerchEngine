import { Component } from '@angular/core';
import { GetdataforPassWordChangeServiceService } from '../getdatafor-pass-word-change-service.service';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-report-generate-component',
  imports: [RouterLink],
  templateUrl: './report-generate-component.component.html',
  styleUrl: './report-generate-component.component.css',
  providers:[GetdataforPassWordChangeServiceService,HttpClient]
})
export class ReportGenerateComponentComponent {
  constructor(private counter:GetdataforPassWordChangeServiceService){}
 reportTableData:any={
  Totalreq:'',
  totalaproved:'',
  totalpending:'',
 Rejectreq:''
 }
 bikedetails:any={
  totalSearchCount:'',
  mostSearchKeyword:'',
  frequency:''
 }
 
ngOnInit():any{
  this.counter.GetCountAllUser().subscribe(data=>
  {
   this.reportTableData.Totalreq=data;
  }

  );
    this.counter.GetCountApprovedReq().subscribe(data1=>{
    this.reportTableData.totalaproved=data1;
  });
   this.counter.getCountPendingReq().subscribe(data1=>{
    this.reportTableData.totalpending=data1;
});
 this.counter.getCountRejectReq().subscribe(data1=>{
    this.reportTableData.Rejectreq=data1;
});
this.counter.getBikeNameAndCount().subscribe(data2=>
{
  this.bikedetails=data2;
}
)
}

downloadReport() {
    const reportData = {
    summary : this.reportTableData,
    bikeDetails : this.bikedetails
  }

  const json = JSON.stringify(reportData , null , 2);
  const blob = new Blob([json] , {type : 'application/json'});
  const url  = window.URL.createObjectURL(blob);

   const a = document.createElement('a');
   a.href  = url; 
   a.download = 'report.json';
   a.click();

      window.URL.revokeObjectURL(url);

}

}
