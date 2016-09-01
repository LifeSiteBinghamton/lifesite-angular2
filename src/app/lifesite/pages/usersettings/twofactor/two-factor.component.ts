import { Component } from '@angular/core';

import { LsForm, LsInput } from 'components';
import { UserService } from 'utility';

@Component({
    selector: 'two-factor',
    template: require('./two-factor.html'),
    styles: [require('./_two-factor.scss')],
    providers: [UserService],
    directives: [LsForm, LsInput]
})
export class TwoFactor {

}
