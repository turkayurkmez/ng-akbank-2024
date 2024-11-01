import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css',
})
export class AddProjectComponent implements OnInit {
  newProjectForm!: FormGroup;

  //inject() fonksiyonunu kullanarak constructor'a müdahale etmeden injection işlemini yapabilirsiniz!
  readonly departmentService = inject(DepartmentService);

  departments$! : Observable<Department[]>

  constructor(private builder: FormBuilder) {}
  ngOnInit(): void {
    this.newProjectForm = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      departmentId: ['', [Validators.required]],
    });

    this.departments$ = this.departmentService.getDepartments();
  }

  checkNameRequired():boolean | undefined{
    return (this.newProjectForm.get('name')?.hasError('required') &&
            this.newProjectForm.get('name')?.dirty);
  }

  checkNameMinLength():boolean | undefined{
    return (this.newProjectForm.get('name')?.hasError('minlength') &&
            this.newProjectForm.get('name')?.dirty);
  }

  checkDescRequired():boolean | undefined{
    return (this.newProjectForm.get('description')?.hasError('required') &&
            this.newProjectForm.get('description')?.dirty);
  }
  
  checkDepartmentRequired():boolean | undefined{
    return (this.newProjectForm.get('departmentId')?.hasError('required') &&
            this.newProjectForm.get('departmentId')?.untouched);
  }

  addProject() {
    if (this.newProjectForm.valid) {
      console.info('proje kaydedildi',this.newProjectForm.value);
    }
  }
}
