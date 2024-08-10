import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  @ViewChild('loginForm') form: NgForm | undefined;
  
  formSubmitHandler(): void {
    
    if(!this.form) {
      return;
    }
    
    const form = this.form;
    
    console.log(form.value)
    
    // form.value returns an object, so we can use destructuring assigment to get the email and the password
    const { email, password } = form?.value;
    console.log(email)
    console.log(password)
    
    form.reset();
  }
}
