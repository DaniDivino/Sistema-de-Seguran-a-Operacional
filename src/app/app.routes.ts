import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent) },
  { path: 'administrador', loadComponent: () => import('./pages/administrador/administrador').then(m => m.AdministradorComponent) },
  { path: 'supervisor', loadComponent: () => import('./pages/supervisor/supervisor').then(m => m.SupervisorComponent) },
  { path: 'usuario', loadComponent: () => import('./pages/usuario/usuario').then(m => m.UsuarioComponent) }
];
