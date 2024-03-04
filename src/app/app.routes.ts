import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent },
  { path: 'userProfile', component: UserProfileComponent },
];
