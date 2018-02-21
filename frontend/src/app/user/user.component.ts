import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { currentUser } from '../data/current-user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: Object;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.userPage().subscribe(
      data => {
        this.user = data['user'];
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }



}
