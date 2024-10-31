import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';

export const routes: Routes = [
    {path:'', component:ProjectListComponent},
    {path:'allProjects', component:ProjectListComponent},
    {path:'projects/:depId', component:ProjectListComponent}

];
