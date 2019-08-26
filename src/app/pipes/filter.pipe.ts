import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], arg: string, field: string): any {
    if(!arg){
      return items;
    }
    return items.filter(item => item[field].toLowerCase().indexOf(arg.toLowerCase()) !== -1);
}

}
