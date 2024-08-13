import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from '../utils/email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true
    }
  ]
})
export class EmailDirective implements Validator{

@Input() appEmail: string[] = [];
validator: ValidatorFn = () => null;

  validate(control: AbstractControl): ValidationErrors | null {

    if(this.appEmail?.length) {
      this.validator = emailValidator(this.appEmail)
    }
    
    return this.validator(control);
  }
}
