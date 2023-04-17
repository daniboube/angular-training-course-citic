import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccessToken, Credentials, User } from '../data/credentials.type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'Register';

  constructor(private httpClient: HttpClient) { }

  onRegister(userData: User) {
    console.log(userData);
    this.httpClient.post<AccessToken>('http://localhost:3000/users', userData)
    .subscribe({
      next: (accessToken) => console.log(accessToken),
      error: (error) => console.error(error)
    })
  }
  
}
