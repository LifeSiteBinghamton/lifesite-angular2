import { AbstractControl, FormControl } from '@angular/forms';

import { IValidator } from '../../validation';

export interface IField<T> {
    value?: T;
    key?: string;
    label?: string;
    order?: number;
    fieldType?: string;
    validators?: IValidator[];

    initializeValidators(control: AbstractControl): void;
    getInvalidMessage(errors: {[key: string]: any}): string;
    ngOnInit(control: FormControl): any;
}
