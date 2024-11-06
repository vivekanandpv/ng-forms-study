import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[validateEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class EmailValidatorDirective implements Validator {
  constructor(@Attribute('validateEmail') public validateEmail: string) {}

  validate(control: AbstractControl): { [key: string]: any } | null {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (control.value && !emailRegex.test(control.value)) {
      return { invalidEmail: true };
    }
    return null;
  }
}
