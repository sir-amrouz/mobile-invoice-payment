import { Routes } from '@angular/router';
import { LoginScreenComponent } from './auth/login-screen/login-screen.component';
import { MfaScreenComponent } from './auth/mfa-screen/mfa-screen.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginScreenComponent,
  },
  {
    path: 'mfa',
    component: MfaScreenComponent,
  },
];
