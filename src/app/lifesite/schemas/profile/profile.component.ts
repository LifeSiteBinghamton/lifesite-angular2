import { Component } from '@angular/core';

import { LsDynamicForm, LsLoader } from 'components';
import { DataService } from 'utility';
import { PROFILE_CONFIG } from './profile.config';
import { Schema } from '../schema';

@Component({
    selector: 'profile',
    template: require('./profile.html'),
    directives: [LsDynamicForm, LsLoader],
    providers: [DataService]
})
export class Profile extends Schema {
    constructor(dataService: DataService) {
        super(PROFILE_CONFIG, dataService);
    }

    ngOnInit() {
        super.ngOnInit('profile');
    }

    onSubmit(form: {value: any, id: string}) {
        super.onSubmit(form);
    }
}
