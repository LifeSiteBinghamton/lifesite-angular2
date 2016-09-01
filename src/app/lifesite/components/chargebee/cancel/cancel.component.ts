import { Component, Output, EventEmitter } from '@angular/core';

import { LsForm, LsRadio, LsSubmit } from 'components';
import { ChargebeeService } from '../chargebee.service';

@Component({
    selector: 'cancel-subscription',
    styles: [require('./_cancel.scss')],
    template: require('./cancel.html'),
    directives: [LsForm, LsRadio, LsSubmit],
    providers: [ChargebeeService]
})
export class Cancel {
    @Output() emitter: EventEmitter<string> = new EventEmitter<string>();

    private radioOptions: [{display: string, value: string}];

    constructor(private chargebeeService: ChargebeeService) {
        this.radioOptions = [
            {display: `I'm trying to save money.`, value: 'money'},
            {display: `LifeSite doesn't include all of the features I want.`, value: 'not-enough-features'},
            {display: `I have a technical problem I need help to solve.`, value: 'technical'},
            {display: `I'd rather switch to LifeSite Basic - it's got enough features for me.`, value: 'basic'},
            {display: `Other`, value: 'other'}
        ];
    }

    onSubmit(form: {value: any, id?: string}): void {
        this.chargebeeService.cancelSubscription(form.value);
    }
}
