import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AppRoutingModule } from './/app-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeService } from './recipe.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { ValidateService } from './validate.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    IngredientsComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RecipeService,
    ValidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
