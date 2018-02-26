import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  title = 'Pantry Pal';

  ngOnInit() {
  }

  handleLogout() {
    this.authService.logout();
  }

  openSignupModal() {
    document.getElementsByClassName('signup-modal')[0].classList.add('md-show');
  }

  openLoginModal() {
    document.getElementsByClassName('login-modal')[0].classList.add('md-show');
  }

}
