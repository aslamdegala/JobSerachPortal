import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortpipe',
})
export class SortpipePipe implements PipeTransform {
  transform(value: any[], order = '', column: string = ''): any {
    if (!value || order === '' || !order) {
      return value;
    } // no array
    if (!column || column === '') {
      if (order === 'asen') {
        return value.sort();
      } else {
        return value.sort().reverse();
      }
    }
  }
}
