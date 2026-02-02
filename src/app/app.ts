import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  name = signal('Joe');
  val = '';
  ok = true;
  items = ['A','B','C'];
   type: 'info' | 'warning' | 'success' = 'info';
  msg = 'Hello';
  count = 0;
  text='';
}
