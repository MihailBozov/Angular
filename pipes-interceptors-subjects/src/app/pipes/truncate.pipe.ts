import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text: string, limit: number): unknown {
    return `${text.substring(0, limit)}`;
  }


}
