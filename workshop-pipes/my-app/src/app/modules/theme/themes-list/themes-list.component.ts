import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})

export class ThemesListComponent implements OnInit{
  themes: Theme[] = [];
  isLoading: boolean = true;
  constructor(private api: ApiService, private userService: UserService) {}
  
  ngOnInit(): void {
    
    this.api.getThemes().subscribe(themes => {
      console.log(themes);
      this.themes = themes; 
      
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      
    });  
  }
  
  isSubscribed(theme: Theme) {
    const isSubscribedUser = theme.subscribers.find(s => s === this.userId)
   return !!isSubscribedUser; 
  }
  
  
  
  get userId(): string {
    return this.userService.user?.id || '' ;
  }
  
  get isLoggedIn() {
    return this.userService.isLoggedIn;
  }
}
