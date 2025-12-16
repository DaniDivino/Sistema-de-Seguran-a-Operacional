import { Component, inject } from '@angular/core';
import { Auth } from '../../core/services/auth/auth';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [],
  templateUrl: './administrador.html',
  styleUrl: './administrador.css'
})
export class AdministradorComponent {
  auth = inject(Auth);
  
  get perfilUsuario() {
    return this.auth.userAuth()?.perfil;
  }
}
