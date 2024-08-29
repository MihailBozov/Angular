import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ProfileDetails } from './../../../types/profile-details';
import { Component } from '@angular/core';
import { emailValidator } from '../../shared/utils/email-validator';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: 'John',
    email: 'johny@gmail.com',
    tel: '088'
  };

  form = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel: ['', [Validators.required, Validators.pattern('^[0-9]+$'), this.exactLengthValidator(9)]]
  })

  constructor(private formBuilder: FormBuilder) {}

  saveProfileHandle(): void {
    console.log('invoked', this.form.value);
    
    if(this.form.invalid) {
      return;
    }
    
    this.profileDetails = this.form.value as ProfileDetails;
    this.onToggle()
  }


  onToggle(): void {
    this.showEditMode = !this.showEditMode;
  }

   exactLengthValidator(requiredLength: number) : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isValid = control.value?.length === requiredLength;

      return isValid ? null : { exactLength: { requiredLength }  }
    }
  }
}
