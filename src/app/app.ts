import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnLogin } from "./core/components/btn_login/btn_login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BtnLogin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sigo');
}
