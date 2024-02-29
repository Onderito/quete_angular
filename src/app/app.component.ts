import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { UserProfileComponent } from './user-profile/user-profile.component';
=======
import { BlockComponent } from './block/block.component';
>>>>>>> 9472f6243774e0d683bcfa8b6ba2ddd68342fe10

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, UserProfileComponent],
=======
  imports: [RouterOutlet, BlockComponent],
>>>>>>> 9472f6243774e0d683bcfa8b6ba2ddd68342fe10
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Ulas';
}
