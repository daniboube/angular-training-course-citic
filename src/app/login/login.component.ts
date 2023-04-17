import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccessToken, Credentials } from '../data/credentials.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login';

  constructor(private httpClient: HttpClient) { }

  onLogin(credentials: Credentials) {
    console.log(credentials);
    this.httpClient.post<AccessToken>('http://localhost:3000/login', credentials)
    .subscribe({
      next: (response) => console.log(response.accessToken),
      error: (error) => console.log(error),
    });
  }
}
