import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
    {path:'', component:ProjectListComponent},
    {path:'allProjects', component:ProjectListComponent},
    {path:'projects/create',component:AddProjectComponent, canActivate:[authGuard]},
    {path:'projects/:depId', component:ProjectListComponent},
    {path:'departments/create', component:AddDepartmentComponent, canActivate:[()=>{inject(AuthService).isUserAuthenticated}]},
    {path:'login', component:LoginComponent}

];
