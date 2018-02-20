import { Component, OnInit } from '@angular/core';
import { INGREDIENTS } from '../data/ingredients';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ingredients = INGREDIENTS;

}
