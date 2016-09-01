import { AbstractControl, FormControl } from '@angular/forms';

import { IField, IFieldOptions } from '../interfaces';
import { IValidator } from '../../validation';

/**
 * Base Field class. Describes the most common attributes for a form field.
 */
export abstract class LsFieldBase<T> implements IField<T> {
    value: T;
    key: string;
    label: string;
    order: number;
    validators: IValidator[];
    fieldType: string;

    constructor(options: IFieldOptions<T> = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.order = options.order === undefined ? 1 : options.order;
        this.validators = options.validators || [];
    }

    initializeValidators(control: AbstractControl) {
        control.setValidators(this.validators.map((validator: IValidator) => {
            return validator.getValidator();
        }));
    }

    getInvalidMessage(errors: {[key: string]: any}): string {
        if (!errors) {
            return '';
        }

        let k = Object.keys(errors);
        let firstValidator = this.validators.find((validator: IValidator) => {
            return validator.getErrorKey() === k[0];
        });
        return firstValidator.getMessage();
    }

    abstract ngOnInit(control: FormControl);
}

export class LsInputField extends LsFieldBase<string> {
    fieldType: string = 'input';
    type: string = 'text';

    constructor(options: IFieldOptions<string> = {}) {
        super(options);
        this.type = options.type || '';
    }

    ngOnInit(control: FormControl) {}
}

export class LsSelectField extends LsFieldBase<string> {
    fieldType: string = 'select';
    options: {display: string, value: string}[] = [];

    constructor(options: IFieldOptions<string> = {}) {
        super(options);
        this.options = options.elements || [];
    }

    ngOnInit(control: FormControl) {
        control.updateValue(this.value || this.options[0].value || '');
    }
}
