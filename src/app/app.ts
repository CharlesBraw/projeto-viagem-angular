import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importações corrigidas (verifique se os arquivos existem com esses nomes)
import { Menu } from './menu/menu';
import { Card0 } from './card0/card0';
import { Card1 } from './card1/card1';
import { Card2 } from './card2/card2';
import { Card3 } from './card3/card3';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Menu, 
    Card0, 
    Card1, 
    Card2, 
    Card3
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atividade-angular');
}