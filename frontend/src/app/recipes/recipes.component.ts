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
    // this.getRecipes();
    // this.interval = setInterval(() => {
    //      // this.refreshData();
    //      console.log(this.recipes);
    //  }, 5000);
  }

  // refreshData(){
  //     this.recipeService.getRecipes(this.ingredients)
  //         .subscribe(data => {
  //             this.recipes = data;
  //         });
  // }

  // getRecipes(): void {
  //   this.recipeService.getRecipes()
  //     .subscribe(recipes => this.recipes = recipes);
  // }
}
