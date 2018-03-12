import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../data/recipes';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  @Input() recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
}
