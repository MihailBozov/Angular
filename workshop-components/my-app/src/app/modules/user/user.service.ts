import { Injectable } from '@angular/core';
import { UserAuth } from 'src/app/types/userAuth';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserAuth | undefined;
  USER_KEY: string = '[user]';

  constructor() {
    try {
      const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(localStorageUser);
    } catch {
      this.user = undefined;
    }
  }

  login() {
    this.user = {
      firstName: 'sand',
      email: 'sand@gmail.com',
      phoneNumber: '0885',
      password: '1212',
      id: '5fa64ca72183ce1728ff3726'
    }
    
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
  
  get isLoggedIn():boolean {
    return !!this.user;
  }
  

}
