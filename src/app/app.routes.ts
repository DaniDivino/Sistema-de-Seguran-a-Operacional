import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { AdministradorComponent } from './pages/home/administrador/administrador';
import { SupervisorComponent } from './pages/home/supervisor/supervisor';
import { UsuarioComponent } from './pages/home/usuario/usuario';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home,
    children: [
  { path: 'administrador', component: AdministradorComponent },
  { path: 'supervisor', component: SupervisorComponent },
  { path: 'usuario', component: UsuarioComponent },
]},
];