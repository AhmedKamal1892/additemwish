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
    
}
