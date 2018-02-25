import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../data/recipes';
import { INGREDIENTS } from '../data/ingredients';

import { AuthService } from '../auth.service';
import { RecipeService } from '../recipe.service';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: Object;
  ingredients: string[];
  recipes: Recipe[];
  ingredient = '';

  constructor(
    private recipeService: RecipeService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {

    // this.getIngredients();

    this.authService.userPage().subscribe(
      data => {
        this.user = data['user'];
        this.getIngredients();
      },
      err => {
        return false;
      }
    );
  }

  // to convert to backend
  // 1. Add Auth routes in app-routing-module
  // 2. change recipe.service methods from local to backend.
  // 3. change user.component methods from local to backend.
  // 4. change onInit to getIngredients instead of authService.

  //// methods for local file access

  // getIngredients(): void {
  //   this.recipeService.getIngredients(5)
  //     .flatMap(ingredients => {
  //       this.ingredients = ingredients;
  //       return this.recipeService.getRecipes(ingredients);
  //     }).subscribe(recipes => { this.recipes = recipes; });
  // }
  //
  // addIngredient($event): void {
  //   if (!this.ingredients.includes(this.ingredient)) {
  //     this.ingredients.push(this.ingredient);
  //   }
  //   this.ingredient = ""
  //   this.getIngredients();
  // }
  //
  // removeIngredient(name): void {
  //   const index = this.ingredients.indexOf(name);
  //   this.ingredients.splice(index, 1);
  //   this.getIngredients();
  // }

  //// methods for backend file access

  getIngredients(): void {
    this.recipeService.getIngredients(this.user['_id'])
      .flatMap(ingredients => {
        this.ingredients = ingredients;
        return this.recipeService.getRecipes(ingredients);
      }).subscribe(recipes => { this.recipes = recipes; });
  }

  addIngredient(): void {
    if (!this.ingredients.includes(this.ingredient)) {
      this.ingredients.push(this.ingredient);
      const options = {
        ingredients: this.ingredients,
        userid: this.user['_id']
      };
      this.recipeService.updateIngredients(this.user['_id'], this.ingredients)
        .flatMap(result => { this.getIngredients(); return result; })
        .subscribe();
    }
    this.ingredient = '';
  }

  removeIngredient(name): void {
    const index = this.ingredients.indexOf(name);
    this.ingredients.splice(index, 1);
    this.recipeService.updateIngredients(this.user['_id'], this.ingredients)
      .flatMap(result => { this.getIngredients(); return result; })
      .subscribe();
  }
}
