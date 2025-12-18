import { Injectable, signal } from '@angular/core';

import { Router } from '@angular/router';
import { DataAuth, Usuario} from '../../../pages/models/Usuario';
import { User } from '../../../shared/models/user';
import { email } from '@angular/forms/signals';

const USER_STORAGE_KEY = 'currentUserAuth';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  //string, number, boolean
  private usuarios: User[] = [
    {
      email: 'administrador@exemplo.com',
      nome: 'Admin',
      senha: '12345',
      perfil: 'administrador'
    },
    {
      email: 'supervisor@exemplo.com',
      nome: 'Maria Silva',
      senha: '12345',
      perfil: 'supervisor'
    },
    {
      email: 'usuario@exemplo.com',
      nome: 'Usuário Comum',
      senha: '12345',
      perfil: 'usuario'
    }
  // ctrl + (espaço). para autocompletar 
  ];
 
  private getInitialUser(): User | null {
    const userJson = localStorage.getItem(USER_STORAGE_KEY);
    return  userJson ? JSON.parse(userJson) : null;
  }

  userAuth = signal<User | null>(this.getInitialUser());
  // se get initialUser tiver valor isauthenticated,  true, se nulo false
  isauthenticated = signal<boolean>(!!this.userAuth());

  autenticar (email: string, senha: string): boolean {
    // chama comunicação com api externa
    let user = this.usuarios.find(u => u.email === email);
    if (!user || user.senha !== senha) {
      return false;
    }
    this.userAuth.set(user);
    this.isauthenticated.set(true);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    return true;
  }
  
}