import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Snackbar } from '../../common/service/snackbar';
import { Auth } from '../../service/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp implements OnInit {

  signUpForm!: FormGroup;

  private fb = inject(FormBuilder);
  private snackbar = inject(Snackbar);
  private authService = inject(Auth);
  private router = inject(Router)

  ngOnInit(): void {
    this.initallizeForm();
  }


  initallizeForm() {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  signUp() {
    if (this.signUpForm.invalid) {
      this.snackbar.info('please fill all required fills')
      return;
    }

    const response = this.authService.addUser(this.signUpForm.value);

    if (response) {
      this.snackbar.success('Successfully registered');
      this.router.navigate(['/login'])
      this
    } else {
      this.snackbar.error('Registration failed')
    }
  }

  moveToLogin(){
    this.router.navigate(['/login'])
  }
}
