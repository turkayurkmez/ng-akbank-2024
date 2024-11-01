import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url: string = 'https://localhost:7125/api/Projects';
  constructor(private httpClient:HttpClient) { }

   /**
    * Bu örnekte, gelen JSON datası (Project[]) üzerinde - eğer departmentId parametresi belirtilmişse - filtreleme yapıyoruz.
    * Gerçek bir senaryoda olması gereken API'de getProductsByDepartment fonksiyonu olmalı ve bu endpoint'e httpClient
    * ile istek gönderilmeli.  
    */
  getProjects(departmentId?:number):Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.url,)
                          .pipe(
                            map((value)=> departmentId != undefined ? value.filter((p)=>p.departmentId==departmentId) : value),
                            catchError((error:HttpErrorResponse)=> throwError(()=>new Error(error.statusText)))
                          )

  }

  getProjectsByDepartment(id: number){
    this.url = this.url+"/"+id;

  }

}
