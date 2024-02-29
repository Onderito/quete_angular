import { Component } from '@angular/core';
import { Card } from '../models/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  card: Card = {
    picture:
      'https://s.france24.com/media/display/d9b51bda-106b-11e9-a881-005056bff430/w:1280/p:4x3/neymar-maillotpsg-m.jpg',
    title: 'Neymar Jr.',
    age: 30,
    citation: '',
  };

  onClick(): void {
    alert('Oh oui c moi Neymaaaaar');
  }
}
