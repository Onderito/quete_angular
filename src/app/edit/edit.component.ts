import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
})
export class EditComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  studentName: string = '';

  ngOnInit() {
    this.route.parent?.paramMap.subscribe((params: ParamMap) => {
      this.studentName = params.get('nameStudent') || '';
    });
  }
}
