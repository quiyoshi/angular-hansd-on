import { Component } from '@angular/core';
import { todoList } from './todoList';
import { Todo } from './todo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'My todo-list';
  todoList: Todo[] = [...todoList];
}
