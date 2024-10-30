import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from './models/todoItem.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intro Angular';
  isOk:boolean = false;
  paragraph: string = 'Bu bir paragraf'
  num:number = 2;
  


  todoItems: TodoItem[] = [
    { id:1, task:'Kedinin mamasını koy', isDone:false},
    { id:2, task:'Çiçekleri sula', isDone:true},
    { id:3, task:'Angular Öğren', isDone:false}
  ];

  tasksCount: number = this.todoItems.length;

  comment?:string;

  
}
