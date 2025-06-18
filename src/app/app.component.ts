import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportGenerateComponentComponent } from './report-generate-component/report-generate-component.component';
import { FirstloginComponent } from './firstlogin/firstlogin.component';



@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, RouterModule, RouterOutlet,HomeComponent,ReportGenerateComponentComponent,FirstloginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SerchEngine';
 userRole: string | null = null;

 constructor(private router: Router) {

 }
  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole') ;
  }
}

