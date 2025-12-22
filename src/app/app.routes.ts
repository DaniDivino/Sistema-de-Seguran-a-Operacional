import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { AdministradorComponent } from './pages/home/administrador/administrador';
import { SupervisorComponent } from './pages/home/supervisor/supervisor';
import { UsuarioComponent } from './pages/home/usuario/usuario';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { redirectByRoleGuard } from './core/guards/redirect-by-role.guard';
import { publicGuard } from './core/guards/public.guard';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    component: Login,
    canActivate: [publicGuard] // Redireciona se já estiver autenticado
  },
  { 
    path: 'home', 
    component: Home,
    canActivate: [authGuard], // Apenas verifica autenticação
    children: [
      { 
        path: '', 
        canActivate: [redirectByRoleGuard], // Redireciona se acessar /home sem perfil
        children: []
      },
      { 
        path: 'administrador', 
        component: AdministradorComponent,
        canActivate: [roleGuard],
        data: { roles: ['administrador'] }
      },
      { 
        path: 'supervisor', 
        component: SupervisorComponent,
        canActivate: [roleGuard],
        data: { roles: ['supervisor'] }
      },
      { 
        path: 'usuario', 
        component: UsuarioComponent,
        canActivate: [roleGuard],
        data: { roles: ['usuario'] }
      },
    ]
  },
  { 
    path: '**', 
    redirectTo: 'login' // Qualquer rota inválida vai para login
  }
];