import { Component, signal } from '@angular/core';
import { Calculator } from './calculator/calculator';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  imports: [ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calculator-project');
}
