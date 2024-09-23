import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Wishitem } from 'src/shared/model/wishitem';

@Injectable({
    providedIn: 'root',
})
export class LoginRegisterService{
    constructor(private localStorageService : LocalStorageService) {}

    users : {email: string, password: string, wishList: Wishitem[]}[] = [];

    loggedInUser: {email: string, password: string, wishList: Wishitem[]} = {email: '', password: '', wishList: []};

    initialize() : void {
      this.users = this.localStorageService.getUsers();
      console.log('Users:', this.users);
    }
    Regiester(email : string, password: string) {
        this.users.push({
            email: email,
            password: password,
            wishList: [],
        });
        this.loggedInUser = this.users[this.users.length - 1];
        this.localStorageService.saveUsers(this.users);

   }
    Login(email: string, password: string) {
      
      for (let i = 0; i < this.users.length; i++) {
        console.log(this.users[i])
        if(this.users[i].email === email) {

          if (this.users[i].email === email && this.users[i].password === password) {
              console.log(this.users[i])
              this.loggedInUser = this.users[i];
              return "login successful";
          }
          else {
            return "invalid password";
          }
        }
      }
      return "user not found";
  }
  
}
