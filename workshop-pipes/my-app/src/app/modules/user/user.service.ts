import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuth } from 'src/app/types/userAuth';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserAuth | undefined;
  USER_KEY: string = '[user]';

  constructor(private http: HttpClient) {
    try {
      const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(localStorageUser);
    } catch {
      this.user = undefined;
    }
  }

  login(email: string, password: string) {
    
    return this.http.post<UserAuth>('api/login', {email, password})
  }
  
  register(username: string, tel:string, email: string, password: string, rePassword: string) {
    return this.http.post('api/post/register', {
      username,
      tel,
      email,
      password,
      rePassword
    })
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
  
  get isLoggedIn():boolean {
    return !!this.user;
  }
  

}
