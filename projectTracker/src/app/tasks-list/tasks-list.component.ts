import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  @Input() tasks!: Task[];
}
