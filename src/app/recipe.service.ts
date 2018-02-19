import { Injectable } from '@angular/core';
import { Recipe } from './data/recipes.ts';
import { RECIPES } from './data/recipes.ts';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
var unirest = require('unirest');
const axios = require('axios');


@Injectable()
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }

  getRecipe(id: number): Observable<Recipe> {
    return of(RECIPES.find(recipe => recipe.id === id));
  }

  // getRecipe(id: number): Observable<Recipe> {
  //   return unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/479101/information?includeNutrition=false")
  //   .header("X-Mashape-Key", "95888ikv6vmshpwMcAndhn7AvAMyp1H51Qnjsn7XTBMDjflTIq")
  //   .header("Accept", "application/json")
  //   .end(function (result) {
  //     console.log(result);
  //   });
  // }

  // getRecipe(id: number): Observable<Recipe> {
  //   return of(axios ({
  //     method: 'get',
  //     url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information?includeNutrition=false`
  //     headers: {
  //       'X-Mashape-Key': '95888ikv6vmshpwMcAndhn7AvAMyp1H51Qnjsn7XTBMDjflTIq',
  //       'Accept': 'application/json'
  //      },
  //   }).then(response => return response.data)
  // }

}
