import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
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

    canActivate(route: ActivatedRouteSnapshot ,state : RouterStateSnapshot): boolean {
        if (route.routeConfig?.path === 'home') {
            if (this.localStorageService.getLoggedInUser() == '{}') {
                const isAuthenticated = this.authService.isLoggedIn();
                if (!isAuthenticated) {
                    this.router.navigate(['/login']);
                    return false;
                }
                return true;
            } else {
                return true;
            }
        }
        else if (route.routeConfig?.path === 'login' || route.routeConfig?.path === 'register') {
          console.log(this.localStorageService.getLoggedInUser() === '{}' ? 'true' : 'false');
            if (this.localStorageService.getLoggedInUser() === '{}') {
                return true;
            } else {
                this.router.navigate(['/home']);
                return false;
            }
        }
        else {
            return false;
        }
    }
}
