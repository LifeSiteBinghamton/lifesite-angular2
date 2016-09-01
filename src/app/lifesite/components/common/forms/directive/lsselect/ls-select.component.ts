import { Component, Input, Output, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormControl } from '@angular/forms';

import { LsControl } from '../ls-control';
import { ValidatorMessages } from '../../validation';

@Component({
    selector: 'ls-select',
    template: require('./ls-select.html'),
    directives: [ValidatorMessages, REACTIVE_FORM_DIRECTIVES]
})
export class LsSelect extends LsControl implements OnInit {
    @Input() protected id: string;
    @Input() protected width: string;
    @Input() protected display: string;
    @Input() protected options: [{display: string, value: any}];
    @Input() protected validatorList: string;
    @Input() protected validatorMessages: string;
    @Output() protected onChange: EventEmitter<any> = new EventEmitter();

    selectedOption: string;

    constructor(cdr: ChangeDetectorRef) {
        super(cdr);
    }

    ngOnInit(): any {
        super.ngOnInit();
        this.selectedOption = this.options[0].value;
    }

    updateValue(value: any) {
        this.selectedOption = this.options.find((opt) => {
            return opt.value === value;
        }).value;
        (<FormControl>this.control).updateValue(value);
        this.changeDetectorRef.detectChanges();
    }
}
