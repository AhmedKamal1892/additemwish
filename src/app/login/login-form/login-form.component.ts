import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Wishitem } from 'src/shared/model/wishitem';
import { Router } from '@angular/router';
import { LoginRegisterService } from 'src/app/login-register.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent  {
    constructor(private authService : AuthService) {}
    router: Router = inject(Router);
    email: string = '';
    password: string = '';
    
    login(form: NgForm) {
        console.log('Form:', form.value);
        this.email = form.value.email;
        this.password = form.value.password;
        const errorMessage = this.authService.login(this.email, this.password);
        if(errorMessage == 'login successful') {
            this.router.navigate(['/home']);
            console.log(errorMessage);
        }
        else if(errorMessage == 'invalid password') {
            alert(errorMessage);
        }
        else if(errorMessage == 'user not found') {
            alert(errorMessage);
        }
        else {
            alert(errorMessage);
        }
    }
}
