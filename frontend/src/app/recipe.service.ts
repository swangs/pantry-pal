import { Injectable, isDevMode } from '@angular/core';

import { Recipe } from './data/recipes';
import { INGREDIENTS } from './data/ingredients';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class RecipeService {

  authToken: any;

  constructor(
    private http: HttpClient
  ) { }

  localhost() {
    if (isDevMode()) {
      return 'http://localhost:3000/';
    } else {
      return '';
    }
  }

  //// getIngredients and updateIngredients for backend

  generateTokenHeader() {
    const token = localStorage.getItem('token');
    this.authToken = token;

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
  }

  getIngredients(userid): Observable<string[]> {
    const headers = this.generateTokenHeader();

    return this.http.get<string[]>(`${this.localhost()}api/users/${userid}`, { headers });
  }

  updateIngredients(userid, ingredients): Observable<string[]> {
    const headers = this.generateTokenHeader();

    return this.http.patch<string[]>(`${this.localhost()}api/users/${userid}`, { ingredients }, { headers });
  }


  getRecipes(ingredients): Observable<Recipe[]> {
    const ingredientsString = ingredients.join(',');
    const ingredientsURI = encodeURIComponent(ingredientsString);
    return this.http.get<Recipe[]>(`${this.localhost()}api/recipes/findByIngredients?ingredients=${ingredientsURI}`);
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.localhost()}api/recipes/${id}`);
  }
}
