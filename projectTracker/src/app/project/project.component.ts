import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { TasksListComponent } from "../tasks-list/tasks-list.component";
import { DatePipe, PercentPipe, TitleCasePipe } from '@angular/common';
import { TextPipe } from '../pipes/text.pipe';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TasksListComponent, TitleCasePipe, DatePipe, PercentPipe, TextPipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit,DoCheck {
   
  @Input() currentProject!: Project
  totalUnDoneTasksCount?: number = 0;

  constructor(){
    // this.totalUnDoneTasksCount = this.currentProject.tasks?.filter(t=>!t.isDone).length;
  }
  ngDoCheck(): void {
    this.totalUnDoneTasksCount = this.currentProject.tasks?.filter(t=>!t.isDone).length;

  }
  ngOnInit(): void {
    //this.totalUnDoneTasksCount = this.currentProject.tasks?.filter(t=>!t.isDone).length;
  }
}
