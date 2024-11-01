import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private httpClient: HttpClient) {}

  url: string = 'https://localhost:7125/api/Departments';

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.url).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        return throwError(() => new Error(err.message));
      })
    );
  }

  createNewDepartment(department: Department): Observable<Department>{
    let option = {
      headers: new HttpHeaders({
        'Authentication':'Bearer [TOKEN]'
      })
    }
    return this.httpClient.post<Department>(this.url,department,option);
  }
}
