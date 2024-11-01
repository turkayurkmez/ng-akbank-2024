import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { fakeDepartments } from '../models/mocks/depaerments.mock';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../services/department.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-department-menu',
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  templateUrl: './department-menu.component.html',
  styleUrl: './department-menu.component.css',
})
export class DepartmentMenuComponent implements OnInit {
  constructor(private departmentService: DepartmentService) {}

  departments: Department[] = fakeDepartments;
  departments$!: Observable<Department[]> 

  ngOnInit(): void {
    // this.departmentService.getDepartments().subscribe({
    //   next: (response) => (this.departments = response),
    //   error: (err) => console.log('hata oluştu:', err),
    //   complete: () => console.log('stream işlemi bitti'),
    // });

    this.departments$ = this.departmentService.getDepartments();
  }
}
