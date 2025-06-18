
import { Component, OnInit } from '@angular/core';
import { GetdataforPassWordChangeServiceService } from '../getdatafor-pass-word-change-service.service';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-report-generate-component',
  templateUrl: './report-generate-component.component.html',
  styleUrls: ['./report-generate-component.component.css'],
  providers: [GetdataforPassWordChangeServiceService, HttpClient]
})
export class ReportGenerateComponentComponent implements OnInit {

  constructor(private counter: GetdataforPassWordChangeServiceService) {}

  reportTableData: any = {
    Totalreq: '',
    totalaproved: '',
    totalpending: '',
    Rejectreq: ''
  };

  bikedetails: any = {
    totalSearchCount: '',
    mostSearchKeyword: '',
    frequency: ''
  };

  ngOnInit(): void {
    this.counter.GetCountAllUser().subscribe(data => {
      this.reportTableData.Totalreq = data;
    });

    this.counter.GetCountApprovedReq().subscribe(data1 => {
      this.reportTableData.totalaproved = data1;
    });

    this.counter.getCountPendingReq().subscribe(data1 => {
      this.reportTableData.totalpending = data1;
    });

    this.counter.getCountRejectReq().subscribe(data1 => {
      this.reportTableData.Rejectreq = data1;
    });

    this.counter.getBikeNameAndCount().subscribe(data2 => {
      this.bikedetails = data2;
      console.log(data2);
    });
  }

  downloadPDF() {
    const doc = new jsPDF();
    doc.text(' SuperBike Search Report Summary', 14, 15);

    const head = [['#', 'Category', 'Value']];
    const data = [
      ['1', 'Approved Users', this.reportTableData.totalaproved],
      ['2', 'Pending Users', this.reportTableData.totalpending],
      ['3', 'Rejected Users', this.reportTableData.Rejectreq],
      ['4', 'Total User Requests', this.reportTableData.Totalreq],
      ['5', 'Total Search Count', this.bikedetails.totalSearchCount],
      ['6', 'Most Searched Keyword', `${this.bikedetails.mostSearchKeyword} (${this.bikedetails.frequency})`]
    ];

    autoTable(doc, {
      head: head,
      body: data,
      startY: 20,
      theme: 'striped',
      headStyles: {
        fillColor: [50, 50, 50],
        textColor: [255, 255, 255]
      },
      styles: {
        fontSize: 10
      }
    });

    doc.save('SuperBike-Report.pdf');
  }
}
