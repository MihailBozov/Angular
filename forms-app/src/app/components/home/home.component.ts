import { Component } from '@angular/core';
import { MyStructuralDirectiveDirective } from 'src/app/directives/my-structural-directive.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  isShown: boolean = false;
  
  toggle(): void {
   this.isShown = !this.isShown;
  }
  
  simpleClick(directiveRef: MyStructuralDirectiveDirective) {
    console.log(directiveRef);
  }
}
