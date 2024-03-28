import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
})
export class SkillComponent {
  @Input()
  name: string = '';

  @Input()
  logo: string = '';

  @Input()
  site: string = '';
}
