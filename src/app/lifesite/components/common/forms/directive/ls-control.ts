import { ChangeDetectorRef } from '@angular/core';
import { FormControl, FormArray, Validators } from '@angular/forms';

import { IValidator, getValidator } from '../validation';

/**
 * @name LsControl
 * @description
 * Base class for all
 */
export abstract class LsControl {
    protected id: string;
    protected control: FormControl | FormArray;
    protected value: any;

    protected validatorList: string = '';
    protected validatorMessages: string = '';
    protected validators: Array<IValidator>;
    protected changeDetectorRef: ChangeDetectorRef;

    constructor(_changeDetectorRef: ChangeDetectorRef) {
        this.changeDetectorRef = _changeDetectorRef;
    }

    ngOnInit() {
        let validators: Array<IValidator> = [];
        let validatorFunctions = [];
        if (this.validatorList !== '') {
            let messages = this.validatorMessages.split(',');
            validators = this.validatorList.split(',').map((str: string, idx: number) => {
                let message = messages[idx] !== '' ? messages[idx] : null;
                return getValidator(str, message);
            });

            validatorFunctions = validators.map((o: IValidator) => {
                return o.getValidator();
            });
        }

        this.validators = validators;
        this.control = new FormControl(this.value || '', Validators.compose(validatorFunctions));
    }

    abstract updateValue(value: any);

    get $control(): FormControl | FormArray {
        return this.control;
    }

    get $id(): string {
        return this.id;
    }
}
