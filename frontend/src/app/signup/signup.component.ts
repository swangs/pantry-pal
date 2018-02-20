import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: String;
  password: String;

  constructor(private validateService: ValidateService) { }

  ngOnInit() {
  }

  handleSignup() {
    const user = {
      username: this.username,
      password: this.password
    };

    if (!this.validateService.validateFields(user)) {
      console.log('Fill out all fields.');
      return false;
    }
  }
}
