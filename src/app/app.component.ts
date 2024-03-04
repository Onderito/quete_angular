import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Ulas';
}
