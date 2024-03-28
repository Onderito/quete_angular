import { Component } from '@angular/core';
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
  developer: Developer = {
    lastName: 'Jean',
    firstName: 'Raymond',
    age: 46,
    gender: 'Féminin',
    bio: 'Plombier Chauffagiste',
    skills: [
      {
        name: 'Angular',
        logo: 'https://angular.io/assets/images/logos/angular/angular.png',
        site: 'https://angular.io/',
      },
      {
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        site: 'https://reactjs.org/',
      },
      {
        name: 'Vue',
        logo: 'https://vuejs.org/images/logo.png',
        site: 'https://vuejs.org/',
      },
    ],
  };
}
