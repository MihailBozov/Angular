import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit{
  
  
  registerForm: FormGroup = this.formBuilder.group({ email: ['', [Validators.required, Validators.email] ], password: ['', [ Validators.required, Validators.minLength(3)]]}) 
  

  constructor(private formBuilder: FormBuilder) {}
  
  // to see every change
  ngAfterViewInit(): void {
    if(this.registerForm) {
      this.registerForm.valueChanges.subscribe(x => {
        console.log(x);
      })
    }
  }
  
  handleSubmit():void {
    console.log('My form group is:', this.registerForm.valid);
  }
}
