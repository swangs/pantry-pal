import { Injectable } from '@angular/core';
// import { mashapeKey } from './api';
import { Recipe } from './data/recipes';
// import { RECIPES } from './data/recipes';
import { INGREDIENTS } from './data/ingredients';
// import { INGREDIENTS } from './ingredients/ingredients.component';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      // 'X-Mashape-Key': mashapeKey
     })
};

@Injectable()
export class RecipeService {

  constructor(
    private http: HttpClient
  ) { }

  // getRecipes(): Observable<Recipes[]> {
  //   return of(RECIPES);
  // }
  //
  // getRecipe(id: number): Observable<Recipe> {
  //   return of(RECIPES.find(recipe => recipe.id === id));
  // }

  getRecipes(): Observable<Recipe[]> {
    const ingredients = [];
    for (let i = 0; i < INGREDIENTS.length; i++) {
      ingredients.push(INGREDIENTS[i].name);
    }
    const ingredientsString = ingredients.join(',');
    const ingredientsURI = encodeURIComponent(ingredientsString);
    /* tslint:disable-next-line */
    // return this.http.get<Recipe[]>(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${ingredientsURI}&limitLicense=false&number=5&ranking=2`, httpOptions);
  }

  getRecipe(id: number): Observable<Recipe> {
    /* tslint:disable-next-line */
    // return this.http.get<Recipe>(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information?includeNutrition=false`, httpOptions);
  }

}
