import { Injectable } from '@angular/core';
import { Recipe } from './data/recipes.ts';
import { RECIPES } from './data/recipes.ts';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class RecipeService {

  constructor() { }
  // 
  // getRecipes(): Recipe[] {
  //   return RECIPES;
  // }

  getRecipes(): Observable<Recipe[]> {
    // Todo: send the message _after_ fetching the heroes
    return of(RECIPES);
  }

}
