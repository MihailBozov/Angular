import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = {
    name: 'Petko',
    age: 21,
    list: [1,2,3,4,5,6,7,8,9,]
  }

  nums: number[] = [100,200,300];


  sum(acc: number, curr: number): number {
    return acc + curr;
  }

  addProperty(): void {
    (this.user as any).test = 'test123'
    this.user.list = [...this.user.list, 100];
  }

  promise: Promise<any> = new Promise(resolve => {
    setTimeout(() => {
      resolve(1111)
    }, 2000);
  });

  time$ = interval(1000).pipe(map(() => new Date()))
}
