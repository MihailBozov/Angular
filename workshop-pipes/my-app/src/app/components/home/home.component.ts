import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userService: UserService) {}
  
  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }
}
