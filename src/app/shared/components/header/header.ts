import { Component, inject } from '@angular/core';
import { Auth } from '../../../core/services/auth/auth';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  auth = inject(Auth);
  
  get nomeUsuario() {
    return this.auth.userAuth()?.nome || 'Usuário';
  }
  
  get perfilUsuario() {
    return this.auth.userAuth()?.perfil || '';
  }

logout() {
  this.auth.logout();
}

  

}
