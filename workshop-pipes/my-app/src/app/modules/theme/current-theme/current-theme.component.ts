import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit{
  
  theme: Theme | undefined;
 
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute){}
      
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      const id = data['themeId'];
      
      this.apiService.getTheme(id).subscribe(theme => {
        this.theme = theme;
  
      })
    })
    
  }
  


}
