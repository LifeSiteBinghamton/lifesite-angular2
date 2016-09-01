import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { IField } from '../interfaces';

@Component({
    selector: 'ls-form-field',
    template: require('./ls-form-field.html'),
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class LsFormField {
    @Input() field: IField<any>;
    @Input() form: FormGroup;

    ngOnInit() {
        let control = <FormControl>this.form.controls[this.field.key];
        if (control) {
            this.field.ngOnInit(control);
            this.field.initializeValidators(control);
        }
    }

    get isValid() {
        return this.form.controls[this.field.key].valid;
    }

    get isTouched() {
        return this.form.controls[this.field.key].touched;
    }

    get validatorMessage() {
        return this.field.getInvalidMessage(this.form.controls[this.field.key].errors);
    }
}
