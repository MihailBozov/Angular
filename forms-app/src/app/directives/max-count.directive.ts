import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaxCountDirective,
      multi: true,
    }
  ]
})
export class MaxCountDirective implements Validator {

  @Input() appMaxCount: number | undefined;
  
  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    const length = control.value || 0;
    
    console.log('--', control.value.length);
    
    if(!this.appMaxCount || length <= this.appMaxCount) {
      return null;
    }
    
    return { appMaxCount: this.appMaxCount };
  }

}
