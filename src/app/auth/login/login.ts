import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Auth } from '../../service/auth';
import { Snackbar } from '../../common/service/snackbar';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  loginForm!: FormGroup;
  users!: any[]

  hidePassword: boolean = true;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(Auth);
  private snackbarService = inject(Snackbar)

  ngOnInit() {
    this.initializeForm();
    this.getUsers();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  getUsers() {
    this.users = this.authService.getUser();
    console.log(this.users);
  }

  showPassword() {
    this.hidePassword = !this.hidePassword;
  }

  login() {
    if (this.loginForm.invalid) {
      this.snackbarService.info("Fill all requird fields")
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    const isUserExist = this.users.some(
      (user: any) =>
        user.email === email &&
        user.password === password
    );

    if (isUserExist) {
      this.snackbarService.success('Login Successfully.');
      this.router.navigate(['/app']);
    } else {
      this.snackbarService.error('Login Failed.');
    }
  }

  routeToSignUp() {
    this.router.navigate(['/sign-up'])
  }

}
