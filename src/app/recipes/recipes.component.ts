import { Component, OnInit } from '@angular/core';
import { RECIPES } from '../data/recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recipes = RECIPES;

}
