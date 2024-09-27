import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService {
    constructor(
        private authService: AuthService,
        private router: Router,
        private localStorageService: LocalStorageService
    ) {}

    canActivate(): boolean {
        if (this.localStorageService.getLoggedInUser() == '{}') {
           const isAuthenticated = this.authService.isLoggedIn();
            if (!isAuthenticated) {
                this.router.navigate(['/login']);
                return false;
            }
            return true;
        }
        else {
          return true;
        }
    }
}
