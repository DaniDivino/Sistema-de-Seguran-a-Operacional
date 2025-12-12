import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cards } from './core/components/cards/cards';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Cards],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sigo');
}
