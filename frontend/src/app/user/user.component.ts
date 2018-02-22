import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../data/recipes';
import { Ingredients } from '../data/ingredients';
import { INGREDIENTS } from '../data/ingredients';


import { currentUser } from '../data/current-user';
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

  constructor(
    private recipeService: RecipeService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    // console.log(this);
    // this.interval = setInterval(() => {
    //      console.log(this.recipes);
    //  }, 5000);
    this.getIngredients();
    // console.log(this.ingredients);

    this.authService.userPage().subscribe(
      data => {
        this.user = data['user'];
      },
      err => {
        return false;
      }
    );
  }

  // getRecipes(): void {
  //   this.recipeService.getRecipes()
  //     .subscribe(recipes => this.recipes = recipes);
  // }

  // getIngredients(): void {
  //   this.recipeService.getIngredients()
  //     .subscribe(ingredients => this.ingredients = ingredients);
  // }

  getIngredients(): void {
    this.recipeService.getIngredients()
      .flatMap(ingredients => {
        this.ingredients = ingredients
        return this.recipeService.getRecipes(ingredients);
      }).subscribe(recipes => {this.recipes = recipes});
  }

  // updateIngredients(): void {
  //   this.recipeService.getIngredients()
  //     .flatMap(ingredients => {
  //       this.ingredients = ingredients
  //       return this.recipeService.getRecipes(this.ingredients);
  //     }).subscribe({
  //       next: recipes => {this.recipes = recipes},
  //     });
  // }

  // ingredient = {
  //   id: 1,
  //   name: "",
  // };

  ingredient = "";

  addIngredient($event): void {
    if (!this.ingredients.includes(this.ingredient)) {
      // this.ingredients.push(this.ingredient)
    //   this.recipeService.updateIngredients(this.ingredients, this.user.id)
    //     .flatMap(ingredients => this.getIngredients(this.user.id));
      INGREDIENTS.push(this.ingredient);
    }
    this.ingredient = ""
    this.getIngredients();
  }


}
