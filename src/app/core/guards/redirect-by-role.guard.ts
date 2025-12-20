import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth/auth';

export const redirectByRoleGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);
  
  const userRole = authService.userAuth()?.perfil;
  
  // Se o usuário está tentando acessar /home sem especificar o perfil
  // redireciona para /home/[perfil]
  if (userRole && state.url === '/home') {
    router.navigate(['/home', userRole]);
    return false;
  }
  
  // Se já está na rota correta do perfil, permite o acesso
  return true;
};
