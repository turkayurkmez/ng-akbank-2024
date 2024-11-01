import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { DepartmentService } from '../services/department.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css',
})
export class AddDepartmentComponent {
  department: Department = {};

  createdDepartment$!: Observable<Department>;

  constructor(private departmentService: DepartmentService) {}

  submitForm(form: NgForm) {
    if (form.valid) {
      console.table(form.value);
      console.table(this.department);
      this.createdDepartment$ = this.departmentService.createNewDepartment(
        this.department
      );
    }
  }
}
