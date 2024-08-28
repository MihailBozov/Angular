import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {
  
  constructor(private apiService: ApiService) {}

  addTheme(form: NgForm) {
    if(form.invalid) {
      return
    }
    console.log(form.value)

  }
}
