import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from './models/todoItem.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoItems } from './models/todoItems.mock';
import { AddNewTodoComponent } from "./add-new-todo/add-new-todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, AddNewTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
  }
  title = 'intro Angular';
  isOk:boolean = false;
  paragraph: string = 'Bu bir paragraf'
  num:number = 2;
  



  todoItems: TodoItem[] = TodoItems;

  tasksCount: number = this.todoItems.length;

  comment?:string;
  isAllTasksShowing: boolean = true;

  filterButtonText: string="Tamamlanan görevleri gizle"; 

  filter():void{
    this.isAllTasksShowing = !this.isAllTasksShowing;
    if (!this.isAllTasksShowing) {
      this.todoItems = this.todoItems.filter(t=>!t.isDone);
      this.filterButtonText = "Tüm görevleri göster";
    }
    else{
       this.todoItems = TodoItems
       this.filterButtonText = "Tamamlanan görevleri gizle";
    }  
  }

  getIncompletedTasksCount():number{
    return this.todoItems.filter(t=>!t.isDone).length;
  }

  addNewItem(task: string):void{
    this.todoItems.push(new TodoItem(undefined,task,false));
    console.log(this.todoItems);
  }
}
