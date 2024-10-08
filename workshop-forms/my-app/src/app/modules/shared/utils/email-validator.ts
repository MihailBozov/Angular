import { AbstractControl, ValidatorFn } from "@angular/forms"

export function emailValidator(domains: string[]): ValidatorFn {
    
    const domainString = domains.join('|')
    const regExp = new RegExp(`^[A-Za-z0-9]+@gmail\.(${domainString})$`)

    return (control: AbstractControl) => {

        const isEmailValid = control.value === '' || regExp.test(control.value);

        // Returns null if it is valid, otherwise returns an error object
        return isEmailValid ? null : { emailValidator: true };
    }
  }