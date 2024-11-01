import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project.model';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  /*Dikkat!! Sadece proje array'i içinde ada göre arama yapan bir pipe yazdık!*/
  transform(value?: Project[] | null, keyword?:string): Project[] | undefined | null {
    return keyword != undefined
      ? value?.filter((p)=>p.name?.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
      : value;
  }

}
