import { Component, inject } from '@angular/core';
import { Auth } from '../../../app/core/services/auth/auth';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css'
})
export class UsuarioComponent {
    auth = inject(Auth);

  
get perfilUsuario() {
    return this.auth.userAuth()?.perfil;
  }
}