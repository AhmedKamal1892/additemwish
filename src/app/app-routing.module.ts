import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent , canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register' ,component: RegisterComponent},
  {path: '' ,redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
