import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.loadUsers().subscribe({
      // next: data => console.log(data),
      error: err => console.error('Error from App', err)
    })
  }

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
    this.user.list = [...this.user.list, 100];
  }

  promise: Promise<any> = new Promise(resolve => {
    setTimeout(() => {
      resolve(1111)
    }, 2000);
  });

  time$ = interval(1000).pipe(map(() => new Date()))
}
