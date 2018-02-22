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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  closeModal() {
    document.getElementsByClassName('login-modal')[0].classList.remove('md-show');
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
      error => {
        this.router.navigate(['/login']);
      }
    );
  }

}
