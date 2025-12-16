import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Titulo } from '../../core/components/titulo/titulo';

import { Router } from '@angular/router';
import { Auth } from '../../core/services/auth/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, Titulo],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  authService = inject(Auth);
  router = inject(Router)

  isLoading: boolean = false;
  formSubmit = signal<boolean>(false);

  password = signal<string>("");
  email = signal<string>("");

  emailInvalid = computed(() => {
    return this.email() === ""
  })

  passwordInvalid = computed(() => {
    return this.password() === ""
  })

  errorMessage = computed(() => {
    return this.passwordInvalid() || this.emailInvalid() ? "" : " Usuário Invalido "
  })

  onSubmit() {
    if (!this.emailInvalid() && !this.passwordInvalid()) {
      let result = this.authService.autenticar(this.email(), this.password());
      
      if (result) {
        this.formSubmit.set(false);
        this.router.navigate(['/home']);
      } else {
        this.formSubmit.set(true);
      }
    } else {
      this.formSubmit.set(true);
    }
  }

}