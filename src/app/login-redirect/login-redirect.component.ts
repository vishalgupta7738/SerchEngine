import { Component } from '@angular/core';

@Component({
  selector: 'app-login-redirect',
  imports: [],
  templateUrl: './login-redirect.component.html',
  styleUrl: './login-redirect.component.css'
})
export class LoginRedirectComponent {

  data={
email:'',
password:'',
newpass:'',
html: '<p>Welcome to our app! <a href="https://www.tpointtech.com/azure-creating-container">Log in here</a>.</p>'
}

}
