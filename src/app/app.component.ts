import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isNavActive: boolean = false;

  onClick(): void {
    this.isNavActive = !this.isNavActive;
    console.log('isNavActive', this.isNavActive);
  }
}
