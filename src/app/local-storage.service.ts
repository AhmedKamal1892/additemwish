import { Injectable } from '@angular/core';
import { Wishitem } from 'src/shared/model/wishitem';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}
    users: { username: string, password: string , wishList : Wishitem[] }[] = [];
    localStorage: Storage = window.localStorage;
    Regiester(username: string, password: string) {
        this.users.push({ username: username, password: password , wishList : [] });
        this.localStorage.setItem('users', JSON.stringify(this.users));
    }
    Login(username: string, password: string) {
        this.users = JSON.parse(this.localStorage.getItem('users') || 'Users not Found');
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].username === username && this.users[i].password === password) {
                console.log(this.users[i])
                console.log('Login Success');
                return;
            }
        }
    }
}
