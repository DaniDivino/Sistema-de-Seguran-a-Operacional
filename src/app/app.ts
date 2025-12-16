import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cards } from './core/components/cards/cards';
import { Titulo } from './core/components/titulo/titulo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sigo');

}
