import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Carde } from './carde/carde';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Carde],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atividade-angular');
}
