import { Component } from '@angular/core';
import { Cards } from '../../core/components/cards/cards';
import { Titulo } from '../../core/components/titulo/titulo';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Cards, Titulo],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {}
