import { Component } from '@angular/core';
import { TodoItem } from '../models/todoItem.model';
import { TodoItems } from '../models/todoItems.mock';

@Component({
  selector: 'app-add-new-todo',
  standalone: true,
  imports: [],
  templateUrl: './add-new-todo.component.html',
  styleUrl: './add-new-todo.component.css'
})
export class AddNewTodoComponent {

  todoItems : TodoItem[] = TodoItems;
  addNewItem(task: string):void{
    this.todoItems.push(new TodoItem(undefined,task,false));
    console.log(this.todoItems);
  }

}
