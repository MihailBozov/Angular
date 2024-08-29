import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce'
})
export class ReducePipe<T> implements PipeTransform {

  transform(array: T[], callbackFn: (acc: any, curr: any) => any, initialValue: T): unknown {
    return array.reduce(callbackFn, initialValue)
  }

}
