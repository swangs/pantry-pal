import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
