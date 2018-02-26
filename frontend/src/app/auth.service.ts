import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  signupUser(user) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('/api/users/', user, { headers });
  }

  loginUser(user) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('/api/users/login', user, { headers });
  }

  userPage() {
    this.loadToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });

    return this.http.get('/api/users/user', { headers });
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  // Checks if token is stored in localstorage
  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
