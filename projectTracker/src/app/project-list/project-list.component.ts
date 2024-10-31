import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { fakeProjects } from '../models/mocks/projects.mock';
import { ProjectComponent } from "../project/project.component";
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectComponent, SearchPipe, FormsModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
   projects: Project[] = fakeProjects;
   keyword?:string;

}
