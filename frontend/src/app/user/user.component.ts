import { Component, OnInit } from '@angular/core';
import { currentUser } from '../data/current-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentUser = currentUser;

}
