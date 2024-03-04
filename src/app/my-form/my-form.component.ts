import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css',
})
export class MyFormComponent {
  submitted: boolean = false;

  user: User = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
  };

  // user[] est un tableau de user

  onSubmit(): void {
    this.submitted = true;
    console.log(this.user);
  }

  isValidEmail(email: string): boolean {
    return email.includes('@');
  }
}
