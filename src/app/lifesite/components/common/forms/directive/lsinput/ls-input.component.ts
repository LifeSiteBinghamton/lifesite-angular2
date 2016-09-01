import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormControl } from '@angular/forms';

import { LsControl } from '../ls-control';
import { ValidatorMessages } from '../../validation';

@Component({
    selector: 'ls-input',
    template: require('./ls-input.html'),
    directives: [ValidatorMessages, REACTIVE_FORM_DIRECTIVES]
})
export class LsInput extends LsControl implements OnInit {
    @Input() protected id: string;
    @Input() protected display: string;
    @Input() protected value: string;
    @Input() protected placeholder: string;
    @Input() protected validatorList: string;
    @Input() protected validatorMessages: string;
    @Input() private type: string = 'text';

    constructor(cdr: ChangeDetectorRef) {
        super(cdr);
    }

    ngOnInit(): any {
        super.ngOnInit();
    }

    updateValue(value: any) {
        (<FormControl> this.control).updateValue(value);
        this.changeDetectorRef.detectChanges();
    }
}
