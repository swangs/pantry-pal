import { Component, OnInit } from '@angular/core';
import { INGREDIENTS } from '../data/ingredients';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  ingredient = {
    id: 1,
    name: "",
  };

  constructor() { }

  ngOnInit() {
  }

  ingredients = INGREDIENTS;

  addIngredient($event): void {
    this.ingredients.push(this.ingredient);
    console.log(this.ingredients)
  }

}
