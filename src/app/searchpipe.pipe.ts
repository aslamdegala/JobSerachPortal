import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe',
})
export class SearchpipePipe implements PipeTransform {
  transform(value: any[], searchterm: string): any[] {
    if (value.length === 0) {
      return value;
    }
    return value.filter(function (search) {
      return search.jobTitle.indexOf(searchterm) > -1;
    });
  }
}
