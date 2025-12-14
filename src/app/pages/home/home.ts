import { Component, inject } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Auth } from '../../core/services/auth/auth';

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  auth = inject(Auth);
  
  get perfilUsuario() {
    return this.auth.userAuth()?.perfil;
  }
}
