<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
=======
import { Component } from '@angular/core';
>>>>>>> 9472f6243774e0d683bcfa8b6ba2ddd68342fe10

@Component({
  selector: 'app-user-profile',
  standalone: true,
<<<<<<< HEAD
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
=======
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {}
>>>>>>> 9472f6243774e0d683bcfa8b6ba2ddd68342fe10
