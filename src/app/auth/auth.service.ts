import { Injectable } from '@angular/core';
import { LoginRegisterService } from '../login-register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginRegisterService : LoginRegisterService) {}
  private isAuthenticated = false;

  login(email: string, password: string): string {
    if (this.loginRegisterService.Login(email,password) === "login successful") {
      this.isAuthenticated = true;
      return 'login successful';
      
    } else if(this.loginRegisterService.Login(email,password) === "invalid password") {
      this.isAuthenticated = false;
      return 'invalid password';
    }
    else if(this.loginRegisterService.Login(email,password) === "user not found") {
      this.isAuthenticated = false;
      return 'user not found';
    }
    else {
      this.isAuthenticated = false;
      return 'login failed';
    }
  }
  register(email: string, password: string): string {
    this.loginRegisterService.Regiester(email,password);
    this.isAuthenticated = true;
    return "register successful";
  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
