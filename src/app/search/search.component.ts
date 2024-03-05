import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  studentSearched: string = '';

  router: Router = inject(Router);

  onSubmit(): void {
    this.router.navigate(['/wcs', this.studentSearched]);
  }
}
