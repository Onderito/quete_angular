import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  newOnomatopia: string = '';

  @Output() sendOnomatopiaToParent = new EventEmitter<string>();

  createOnomatopia() {
    // si le champ n'est pas vide
    if (this.newOnomatopia.trim() !== '') {
      // on envoie l'onomatopée au parent
      this.sendOnomatopiaToParent.emit(this.newOnomatopia);
      // on réinitialise le champ
      this.newOnomatopia = '';
    }
  }
}
