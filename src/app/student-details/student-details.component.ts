import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  RouterOutlet,
  RouterLink,
} from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  studentName: string = 'ok';

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.studentName = params.get('nameStudent') || '';
    });
  }
}
