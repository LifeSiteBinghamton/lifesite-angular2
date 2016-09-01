import { ValidatorFn } from '@angular/forms';

export enum ValidatorType {
    CreditCard,
    Email,
    Password,
    MatchingPasswords,
    Required
}

export interface IValidator {
    message: string;
    type: ValidatorType;
    errorKey: string;

    getMessage(): string;
    getErrorKey(): string;
    getType(): ValidatorType;
    getValidator(): ValidatorFn;
    isValid(value: any): boolean;
}
