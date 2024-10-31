import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text',
  standalone: true
})
export class TextPipe implements PipeTransform {

  transform(value: number): string {
    let readingOnes = ['','bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz'];
    let readingTens = ['','on','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan'];

    let ones = value % 10;
    let tens = Math.floor(value/10);

    return readingTens[tens]+ ' ' + readingOnes[ones];

  }

}
