import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Developer } from '../models/developer';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './developer.component.html',
})
export class DeveloperComponent {
  @Input() developer!: Developer;
}
