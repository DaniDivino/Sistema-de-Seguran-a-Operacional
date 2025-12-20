import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth/auth';

export const publicGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);
  
  // Se já estiver autenticado, redireciona para a home do perfil
  if (authService.isauthenticated()) {
    const userRole = authService.userAuth()?.perfil;
    if (userRole) {
      router.navigate(['/home', userRole]);
      return false;
    }
  }
  
  return true;
};
