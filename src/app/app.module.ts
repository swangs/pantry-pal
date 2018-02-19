import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AppRoutingModule } from './/app-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeService } from './recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    IngredientsComponent,
    RecipesComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
