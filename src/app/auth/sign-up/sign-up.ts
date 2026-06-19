import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-sign-up',
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule,],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp { }
