import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { fakeProjects } from '../models/mocks/projects.mock';
import { ProjectComponent } from '../project/project.component';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectComponent, SearchPipe, FormsModule, AsyncPipe],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = fakeProjects;
  projects$?: Observable<Project[]>;
  keyword?: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private projectService: ProjectService
  ) {}
  ngOnInit(): void {
    this.projects$ = this.projectService.getProjects();

    this.activeRoute.params.subscribe((routeParam) => {
      //console.log(routeParam['depId']);
      let depId = Number.parseInt(routeParam['depId']);
      console.log(depId);
      if (depId) {
        //this.projects = fakeProjects.filter((p) => p.departmentId === depId);
        this.projects$ = this.projectService.getProjects(depId);
      }

      //console.log(this.projects);
    });
  }
}
