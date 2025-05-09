import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./github/pages/user-page/user-page.component').then(m => m.UserPageComponent)
  },
  { path: '**', redirectTo: '' }
];