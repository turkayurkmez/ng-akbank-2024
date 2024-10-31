import { Component } from '@angular/core';
import { Department } from '../models/department.model';
import { fakeDepartments } from '../models/mocks/depaerments.mock';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-department-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './department-menu.component.html',
  styleUrl: './department-menu.component.css'
})
export class DepartmentMenuComponent {
   departments: Department[] = fakeDepartments;

}
