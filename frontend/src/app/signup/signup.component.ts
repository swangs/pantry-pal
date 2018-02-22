import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    document.getElementsByClassName('signup-modal')[0].classList.remove('md-show');
  }

  handleError({ error }) {
    if (error && error.errors) {
      Object.values(error.errors).forEach(errMsg => {
        console.log(errMsg['message']);
      });
    }
  }

  handleSignup() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.signupUser(user).subscribe(
      data => {
        this.authService.storeUserData(data['token'], data['user']);
        this.router.navigate(['/user']);
      },
      error => {
        this.handleError(error);
      }
    );
  }
}
