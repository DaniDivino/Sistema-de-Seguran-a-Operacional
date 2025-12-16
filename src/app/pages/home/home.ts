import { Component, inject } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Auth } from '../../core/services/auth/auth';
import { AdministradorComponent } from "../administrador/administrador";
import { SupervisorComponent } from "../supervisor/supervisor";
import { UsuarioComponent } from "../usuario/usuario";

@Component({
  selector: 'app-home',
  imports: [Header, AdministradorComponent, SupervisorComponent, UsuarioComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  auth = inject(Auth);
  
  get perfilUsuario() {
    return this.auth.userAuth()?.perfil;
  }
}
