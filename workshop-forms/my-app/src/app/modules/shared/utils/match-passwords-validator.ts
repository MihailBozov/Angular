import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(passwordControlName: string, rePasswordControlName: string): ValidatorFn {
    

    return (control) => {

        const passFirstControl = control.get(passwordControlName);
        const passSecondControl = control.get(rePasswordControlName);

        console.log({passFirst: passFirstControl, passSecond: passSecondControl });

        const areMatching = passFirstControl?.value === passSecondControl?.value
        

        return areMatching ? null : { matchPasswordsValidator: true };

    };
}