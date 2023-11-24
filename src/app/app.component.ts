import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './app.component.html',
  styleUexport class AppComponent {
    content = '待辦事項 A';
  
    hasFinished = false;
  }rls: ['./app.component.css'],
})
export class AppComponent {}
