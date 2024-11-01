import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddProjectComponent } from './add-project/add-project.component';

export const routes: Routes = [
    {path:'', component:ProjectListComponent},
    {path:'allProjects', component:ProjectListComponent},
    {path:'projects/create',component:AddProjectComponent},
    {path:'projects/:depId', component:ProjectListComponent},
    {path:'departments/create', component:AddDepartmentComponent}
];
