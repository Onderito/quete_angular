import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  form: User = {
    email: '',
    password: '',
  };

  onSubmit() {
    console.log('Form submitted', this.form);
  }
}
