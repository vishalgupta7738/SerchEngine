// import { Component } from '@angular/core';
// //  import { GetdataforPassWordChangeService } from '../getdatafor-pass-word-change.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-demo-sign-in',
//   imports: [FormsModule , CommonModule ],
//   templateUrl: './demo-sign-in.component.html',
//   styleUrl: './demo-sign-in.component.css',
//   providers:[HttpClient]
// })
// export class DemoSignInComponent {

//    constructor(private fakeservce:GetdataforPassWordChangeService){}

// data={
// email:'',
// password:'',
// newpass:''
// }

// userdata:string[]=[];
// OnSubmitPassWord()
// {
//   console.log(this.data);
//   const dataobsvr= this.fakeservce.GetDataForPass(this.data).subscribe(response=>{
//   console.log(response)},

//   error => {
//     console.log(error);
//    }
//  );

// console.log(this.userdata);

//   // this.newPass
//   // this.pass
// }
// }