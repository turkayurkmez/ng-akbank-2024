import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { fakeProjects } from '../models/mocks/projects.mock';
import { ProjectComponent } from '../project/project.component';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectComponent, SearchPipe, FormsModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = fakeProjects;
  keyword?: string;

  constructor(private activeRoute: ActivatedRoute) {}
  ngOnInit(): void {

    this.activeRoute.params.subscribe((routeParam)=>{
       console.log(routeParam['depId']);
       let depId = Number.parseInt(routeParam['depId']);
       console.log(depId);
       this.projects = fakeProjects.filter(p=>p.departmentId === depId);
       console.log(this.projects);
    });
  }

}
