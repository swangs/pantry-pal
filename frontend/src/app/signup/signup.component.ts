import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateService } from '../validate.service';
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
    private validateService: ValidateService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  handleSignup() {

    const user = {
      username: this.username,
      password: this.password
    };

    if (!this.validateService.validateFields(user)) {
      return false;
    }

    this.authService.signupUser(user).subscribe(data => {
      this.router.navigate(['/user']);
    },
    error => {
      console.log(error);
    });
  }
}
