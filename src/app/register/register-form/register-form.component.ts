import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginRegisterService } from 'src/app/login-register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  email: string = '';
  password: string = '';
  router : Router = inject(Router);
  constructor(private authService : AuthService) {}
  register(form : NgForm) {
    this.email = form.value.email;
    this.password = form.value.password;
    const errorMessage = this.authService.register(form.value.email, form.value.password);
    this.router.navigate(['/home']);
  }
}
