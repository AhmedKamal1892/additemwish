import { Injectable } from '@angular/core';
import { Wishitem } from 'src/shared/model/wishitem';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}
    
    localStorage: Storage = window.localStorage;
    localStorageKey: string = 'users';
    saveUsers(users : {}[]) {
        this.localStorage.setItem(this.localStorageKey, JSON.stringify(users));
    }
    getUsers() {
        return JSON.parse(this.localStorage.getItem(this.localStorageKey) || '[]');
    }
    saveLoggedInUser(loggendInUser : {}) {
        this.localStorage.setItem('loggedInUser', JSON.stringify(loggendInUser));
    }
    getLoggedInUser()  { 
        const loggedInUser = this.localStorage.getItem('loggedInUser');
        return loggedInUser ? JSON.parse(loggedInUser) : '{}';
    }
    deleteLoggedInUser() {
        this.localStorage.removeItem('loggedInUser');
    }
    
}
