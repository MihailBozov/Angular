import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(passwordControlName: string, rePasswordControlName: string): ValidatorFn {
    

    return (control) => {

        const passFirstControl = control.get(passwordControlName);
        const passSecondControl = control.get(rePasswordControlName);


        
        const areMatching = passFirstControl?.value == passSecondControl?.value
        
        console.log('areMatching', areMatching);

        return areMatching ? null : { matchPasswordsValidator: true };

    };
}