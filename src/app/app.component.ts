import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    SearchComponent,
    StudentDetailsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
