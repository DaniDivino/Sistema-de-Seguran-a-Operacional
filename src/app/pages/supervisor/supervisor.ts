import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Auth } from '../../../app/core/services/auth/auth';

@Component({
  selector: 'app-supervisor',
  standalone: true,
  imports: [],
  templateUrl: './supervisor.html',
  styleUrl: './supervisor.css'
})
export class SupervisorComponent {
    auth = inject(Auth);

  
get perfilUsuario() {
    return this.auth.userAuth()?.perfil;
  }
}