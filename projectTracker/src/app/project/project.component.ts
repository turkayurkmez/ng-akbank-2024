import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { TasksListComponent } from "../tasks-list/tasks-list.component";
import { DatePipe, PercentPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TasksListComponent, TitleCasePipe, DatePipe, PercentPipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
   
  @Input() currentProject!: Project
}
