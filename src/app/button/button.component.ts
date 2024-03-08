import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() backgroundColor: string = 'transparent';

  @Output()
  dataEmitFromChild: EventEmitter<string> = new EventEmitter();

  sendDataToParent(): void {
    this.dataEmitFromChild.emit(
      "C'est un message que j'envoi au parent depuis le composant enfant."
    );
  }
}
