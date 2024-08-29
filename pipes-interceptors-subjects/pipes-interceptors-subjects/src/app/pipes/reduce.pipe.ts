import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  pure: true
})
export class ReducePipe<T> implements PipeTransform {

  transform(array: T[], callbackFn: (acc: any, curr: any) => any, initialValue: T): unknown {
    console.log("invoked from pipe")
    return array.reduce(callbackFn, initialValue)
  }

}
