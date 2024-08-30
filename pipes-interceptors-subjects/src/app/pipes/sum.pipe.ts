import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumPipe'
})
export class SumPipe implements PipeTransform {

  transform(nums: number[], callbackFn: (acc: number, curr: number) => number, initialValue: number): number {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    return nums.reduce(callbackFn, initialValue);
  }



}
