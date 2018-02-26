import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  data: String;
  error = "";

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  closeModal() {
    document.getElementsByClassName('login-modal')[0].classList.remove('md-show');
    this.error = "";
  }

  handleError({ error }) {
    if (error && error.errors) {
      Object.values(error.errors).forEach(errMsg => {
        this.error = errMsg['message']
      });
    }
  }

  handleLogin() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.loginUser(user).subscribe(
      data => {
        this.authService.storeUserData(data['token'], data['user']);
        this.router.navigate(['/user']);
      },
      err => {
        this.handleError(err);
      }
    );
  }

  demoLogin() {
    const user = {
      username: "Josh King",
      password: "password"
    };

    this.authService.loginUser(user).subscribe(
      data => {
        this.authService.storeUserData(data['token'], data['user']);
        this.router.navigate(['/user']);
      },
      err => {
        this.handleError(err);
      }
    );
  }
}
