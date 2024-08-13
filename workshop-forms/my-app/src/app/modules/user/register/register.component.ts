import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/utils/email-validator';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

//      group(the_name_of_the_field: {['default value', [validations]]})
  form = this.formBuilder.group(
    {
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
      tel: [''],
      passGroup: this.formBuilder.group(
        {
          password: ['', [Validators.required]],
          rePassword: ['', [Validators.required]]
        }
      )
    }
  )

  constructor (private formBuilder: FormBuilder) {}

  register(): void {
      if(this.form.invalid) {
        return;
      }

      console.log(this.form.value);
  }
}
