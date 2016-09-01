import {
    Component,
    Output,
    Input,
    EventEmitter,
    AfterViewInit,
    ContentChildren,
    QueryList
} from '@angular/core';

import { FormBuilder, FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { LsInput } from '../lsinput/ls-input.component';
import { LsSubmit } from '../lssubmit/ls-submit.component';
import { LsSelect } from '../lsselect/ls-select.component';
import { LsRadio } from '../lsradio/ls-radio.component';
import { LsControl } from '../ls-control';

@Component({
    selector: 'ls-form',
    template: require('./ls-form.html'),
    styles: [require('./_ls-form.scss')],
    providers: [FormBuilder],
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class LsForm implements AfterViewInit {
    @Input() alwaysValid: boolean;
    @Input() formId: string = '';
    @Output() submitEvent: EventEmitter<{value: any, id?: string}> = new EventEmitter<{value: any, id?: string}>();

    @ContentChildren(LsInput) inputs: QueryList<LsInput>;
    @ContentChildren(LsSelect) selects: QueryList<LsSelect>;
    @ContentChildren(LsRadio) radios: QueryList<LsRadio>;
    @ContentChildren(LsSubmit) submit: QueryList<LsSubmit>;

    private form: FormGroup;
    private controls: LsControl[];

    constructor(formBuilder: FormBuilder) {
        this.form = formBuilder.group({});
    }

    ngAfterViewInit(): any {
        this._normalize();

        if (this.alwaysValid) {
            this.submit.first.valid = true;
        } else {
            this.form.statusChanges.subscribe(() => {
                if (this.submit.first) {
                    this.submit.first.valid = this.form.valid;
                }
            });
        }
    }

    get value() {
        return this.form.value;
    }

    doSubmit(): void {
        if (this.alwaysValid || this.form.valid) {
            this.submitEvent.emit({
                value: this.value,
                id: this.formId
            });
        }
    }

    setData(map: {[key: string]: any}): void {
        for (let key in map) {
            if (!map.hasOwnProperty(key)) continue;

            this.controls.forEach((control) => {
                if (control.$id === key) {
                    control.updateValue(map[key]);
                }
            });
        }
    }

    private _normalize(): void {
        let controls: any[] = [
            ...this.inputs.toArray(),
            ...this.selects.toArray(),
            ...this.radios.toArray()
        ];
        this.controls = controls;
        for (let control of controls) {
            this.form.addControl(control.$id, control.$control);
        }
    }
}
