import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth/auth';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);
  
  const requiredRoles = route.data['roles'] as string[];
  const userRole = authService.userAuth()?.perfil;
  
  console.log('RoleGuard - Required roles:', requiredRoles);
  console.log('RoleGuard - User role:', userRole);
  console.log('RoleGuard - Has access:', requiredRoles?.includes(userRole || ''));
  
  if (!userRole || !requiredRoles || !requiredRoles.includes(userRole)) {
    console.log('RoleGuard - Access DENIED, redirecting to:', userRole ? `/home/${userRole}` : '/login');
    // Redireciona para a página correta do perfil do usuário
    if (userRole) {
      router.navigate(['/home', userRole]);
    } else {
      router.navigate(['/login']);
    }
    return false;
  }
  
  console.log('RoleGuard - Access GRANTED');
  return true;
};
