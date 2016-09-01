import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { LsArrayForm } from '../lsarrayform';
import { IField } from '../interfaces';
import { LsFormField } from '../lsformfield';

@Component({
    selector: 'ls-dynamic-form',
    template: require('./ls-dynamic-form.html'),
    directives: [LsFormField, REACTIVE_FORM_DIRECTIVES],
    providers: [FormBuilder]
})
export class LsDynamicForm implements OnInit {
    @Input() formId: string;
    @Input() fields: IField<any>[] = [];
    @Output() submitEvent: EventEmitter<{value: any, id?: string}> = new EventEmitter<{value: any, id?: string}>();
    public form: FormGroup;

    private _formArray: LsArrayForm = null;

    constructor(fb: FormBuilder) {
        this.form = fb.group({});
    }

    ngOnInit() {
        this.fields.forEach((field) => {
            this.form.addControl(field.key, new FormControl(field.value || ''));
        });
    }

    doSubmit() {
        let formValue: {[key: string]: any} = this.form.value;

        if (this._formArray !== null) {
            // Remove all the dynamic keys that exist in our form from the formArray. We should just use the value
            // from formArray itself, which has the correct keys.
            this._formArray.fields.forEach((field) => {
                formValue[field.key] = null;
                delete formValue[field.key];
            });

            formValue = Object.assign(formValue, this._formArray.value);
        }

        this.submitEvent.emit({
            value: formValue,
            id: this.formId
        });
    }

    registerFormArray(formArray: LsArrayForm) {
        this._formArray = formArray;
    }

    get valid() {
        return this.form.valid;
    }
}
