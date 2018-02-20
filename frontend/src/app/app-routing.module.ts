import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RecipeDetailsComponent }  from './recipe-details/recipe-details.component';



const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
