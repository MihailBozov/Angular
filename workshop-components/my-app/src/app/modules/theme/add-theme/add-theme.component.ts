import { Component } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {
  
  constructor(private apiService: ApiService) {}

  addTheme(event: Event, themeName: string, postText: string) {
    event.preventDefault();
    this.apiService.createTheme(themeName, postText).subscribe(data => {
      console.log(data);
    });
  }
}
