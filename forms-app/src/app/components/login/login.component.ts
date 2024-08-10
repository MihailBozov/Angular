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
    
    if(this.form) {
      console.log('The form is Valid ->', this.form?.valid)
      console.log('The form is Invalid ->', this.form?.invalid)
      console.log('The form is Pristine ->', this.form.pristine)
      console.log('The form is Dirty ->', this.form.dirty)
      console.log('The form is Touched ->', this.form.touched)
      console.log('The form is Untouched ->', this.form.untouched)
    }
    
    const form = this.form;
    
    console.log(form.value)
    
    // form.value returns an object, so we can use destructuring assigment to get the email and the password
    const { email, password } = form?.value;
    console.log(email)
    console.log(password)
    console.log('Is the form invalid:', form.invalid)
    
    form.reset();
  }
}
