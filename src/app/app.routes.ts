import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
  {
    path: 'wcs/:nameStudent',
    component: StudentDetailsComponent,
    children: [
      {
        path: 'edit',
        component: EditComponent,
      },
    ],
  },

  {
    path: '',
    component: SearchComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
