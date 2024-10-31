import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [DatePipe, TitleCasePipe, FormsModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  @Input() tasks!: Task[];
}
