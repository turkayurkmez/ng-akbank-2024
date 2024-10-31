import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project.model';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  /*Dikkat!! Sadece proje array'i içinde ada göre arama yapan bir pipe yazdık!*/
  transform(value?: Project[], keyword?:string): Project[] | undefined {
    return keyword != undefined
      ? value?.filter((p)=>p.name?.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
      : value;
  }

}
