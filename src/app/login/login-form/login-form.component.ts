import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
    email: string = '';
    password: string = '';
    login(form: NgForm) {
        console.log('Form:', form.value);
        const isFormValid = form.valid;
    }
}
