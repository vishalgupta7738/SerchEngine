import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportGenerateComponentComponent } from './report-generate-component/report-generate-component.component';



@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, RouterModule, RouterOutlet,HomeComponent,ReportGenerateComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SerchEngine';

}
