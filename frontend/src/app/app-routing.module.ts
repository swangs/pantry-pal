import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { AuthGuard } from './auth.guard';
import { LoggedInGuard } from './loggedin.guard';

// , canActivate: [AuthGuard]
const routes: Routes = [
  { path: '', component: LandingPageComponent, canActivate: [LoggedInGuard] },
  { path: 'user', component: UserComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [LoggedInGuard] }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  providers: [
    AuthGuard,
    LoggedInGuard
   ]
})
export class AppRoutingModule {}
