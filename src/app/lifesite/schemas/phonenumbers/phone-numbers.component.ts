import { Component } from '@angular/core';

import { LsArrayForm, LsDynamicForm, LsLoader } from 'components';
import { DataService } from 'utility';
import { PHONE_NUMBERS_CONFIG } from './phone-numbers.config';
import { Schema } from '../schema';

@Component({
    selector: 'phone-numbers',
    template: require('./phone-numbers.html'),
    directives: [LsLoader, LsDynamicForm, LsArrayForm],
    providers: [DataService]
})
export class PhoneNumbers extends Schema {
    constructor(dataService: DataService) {
        super(PHONE_NUMBERS_CONFIG, dataService);
    }

    ngOnInit() {
        super.ngOnInit('phone_numbers');
    }

    onSubmit(form: {value: any, id: string}) {
        super.onSubmit(form);
    }
}
