import { Component } from '@angular/core';

import { LsArrayForm, LsDynamicForm, LsLoader } from 'components';
import { DataService } from 'utility';
import { MEMBERSHIPS_CONFIG } from './memberships.config';
import { Schema } from '../schema';

@Component({
    selector: 'memberships',
    template: require('./memberships.html'),
    directives: [LsLoader, LsDynamicForm, LsArrayForm],
    providers: [DataService]
})
export class Memberships extends Schema {
    constructor(dataService: DataService) {
        super(MEMBERSHIPS_CONFIG, dataService);
    }

    ngOnInit() {
        super.ngOnInit('memberships');
    }

    onSubmit(form: {value: any, id: string}) {
        super.onSubmit(form);
    }
}
