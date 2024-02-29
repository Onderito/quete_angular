import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  isShow = false;

  user = {
    name: 'Onder',
    firstName: 'Ulas',
    age: 24,
    quote: '',
    picture: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  onShowAge() {
    this.isShow = !this.isShow;
  }
}
