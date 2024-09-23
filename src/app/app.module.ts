import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';



import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WishFilterComponent } from './home-page/wish-filter/wish-filter.component';
import { WishListComponent } from './home-page/wish-list/wish-list.component';
import { AddWishFormComponent } from './home-page/add-wish-form/add-wish-form.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    WishFilterComponent,
    WishListComponent,
    AddWishFormComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
