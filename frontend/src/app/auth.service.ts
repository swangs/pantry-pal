import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  signupUser(user) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:3000/users/', user, { headers });
  }

  loginUser(user) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:3000/users/login', user, { headers });
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
