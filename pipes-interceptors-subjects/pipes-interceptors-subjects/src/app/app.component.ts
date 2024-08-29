import { Component } from '@angular/core';

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


  sum(acc: number, curr: number): number {
    return acc + curr;
  }
}
