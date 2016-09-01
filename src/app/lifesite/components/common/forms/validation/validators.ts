import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

import { IValidator, ValidatorType } from './ivalidator.interface.ts';
import { CreditCardUtility } from '../../../../utility';

abstract class BaseValidator implements IValidator {
    message: string;
    type: ValidatorType;
    errorKey: string;

    constructor(message: string) {
        this.message = message === null ? this.message : message;
    }

    getMessage(): string {
        return this.message;
    }

    getErrorKey(): string {
        return this.errorKey;
    }

    getType(): ValidatorType {
        return this.type;
    }

    abstract isValid(value: any): boolean;
    abstract getValidator(): ValidatorFn;
}

class EmailValidator extends BaseValidator {
    message: string = 'Invalid email address.';
    type: ValidatorType = ValidatorType.Email;
    errorKey: string = 'email';

    constructor(message: string) {
        super(message);
    }

    getValidator(): ValidatorFn {
        return (control: FormControl): {[key: string]: any} => {
            return this.isValid(control.value) ? null : {[this.errorKey]: true};
        };
    }

    isValid(value: any): boolean {
        // RFC 2822 compliant regex
        /* tslint:disable */
        return value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
        /* tslint:enable */
    }
}

class RequiredValidator extends BaseValidator {
    message: string = 'This field is required.';
    type: ValidatorType = ValidatorType.Required;
    errorKey: string = 'required';

    constructor(message: string) {
        super(message);
    }

    getValidator(): ValidatorFn {
        return (control: FormControl): {[key: string]: any} => {
            return this.isValid(control.value) ? null : {[this.errorKey]: true};
        };
    }

    isValid(value: any): boolean {
        return value !== '' && value !== null && !!value;
    }
}

class PasswordValidator extends BaseValidator {
    message: string =
        `Password does not meet the requirements`;
    type: ValidatorType = ValidatorType.Password;
    errorKey: string = 'password';

    constructor(message: string) {
        super(message);
    }

    getValidator(): ValidatorFn {
        return (control: FormControl): {[key: string]: any} => {
            return this.isValid(control.value) ? null : {[this.errorKey]: true};
        };
    }

    isValid(value: any): boolean {
        return value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/);
    }
}

class MatchingPasswordsValidator extends BaseValidator {
    message: string = 'Your passwords must match.';
    type: ValidatorType = ValidatorType.MatchingPasswords;
    errorKey: string = 'mismatchedPasswords';

    constructor(message: string) {
        super(message);
    }

    getValidator(): ValidatorFn {
        return (group: FormGroup): {[key: string]: any} => {
            return group.value[0] !== group.value[1] ? {
                [this.errorKey]: true
            } : null;
        };
    }

    isValid(value: any): boolean {
        return true;
    }
}

class CreditCardValidator extends BaseValidator {
    message: string = 'Invalid Credit Card';
    type: ValidatorType = ValidatorType.CreditCard;
    errorKey: string = 'creditcard';

    constructor(message: string) {
        super(message);
    }

    getValidator(): ValidatorFn {
        return (control: FormControl): {[key: string]: any} => {
            return this.isValid(control.value) ? null : {[this.errorKey] : true};
        };
    }

    isValid(value: any): boolean {
        let results = CreditCardUtility.validateCreditCard(value);
        return results.type !== null && results.valid;
    }
}

let map: Array<{type: ValidatorType, validator: Function}> = [
    {type: ValidatorType.CreditCard, validator: CreditCardValidator},
    {type: ValidatorType.Email, validator: EmailValidator},
    {type: ValidatorType.Password, validator: PasswordValidator},
    {type: ValidatorType.MatchingPasswords, validator: MatchingPasswordsValidator},
    {type: ValidatorType.Required, validator: RequiredValidator}
];
export function getValidator(type: string, message: string = null): IValidator {
    let iValidator: any = null;
    switch (type) {
        case 'email':
            iValidator = map.find((ele) => {
                return ele.type === ValidatorType.Email;
            }).validator;
            break;
        case 'password':
            iValidator = map.find((ele) => {
                return ele.type === ValidatorType.Password;
            }).validator;
            break;
        case 'mismatchedPasswords':
            iValidator = map.find((ele) => {
                return ele.type === ValidatorType.MatchingPasswords;
            }).validator;
            break;
        case 'creditcard':
            iValidator = map.find((ele) => {
                return ele.type === ValidatorType.CreditCard;
            }).validator;
            break;
        case 'required':
            iValidator = map.find((ele) => {
                return ele.type === ValidatorType.Required;
            }).validator;
            break;
        default:
            throw Error(type + ' is an invalid validator type');
    }

    return new iValidator(message);
}
