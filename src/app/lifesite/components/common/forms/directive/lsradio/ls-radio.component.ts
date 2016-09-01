import { Component, Input, ElementRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormControl, FormArray } from '@angular/forms';

import { LsControl } from '../ls-control';
import { ValidatorMessages } from '../../validation';

@Component({
    selector: 'ls-radio',
    template: require('./ls-radio.html'),
    directives: [ValidatorMessages, REACTIVE_FORM_DIRECTIVES]
})
export class LsRadio extends LsControl implements OnInit {
    @Input() protected id: string;
    @Input() protected display: string;
    @Input() protected validatorList: string;
    @Input() protected validatorMessages: string;
    @Input() private name: string;
    @Input() private options: [{display: string, value: string}];

    constructor(cdr: ChangeDetectorRef, private el: ElementRef) {
        super(cdr);
    }

    ngOnInit(): any {
        this.control = new FormControl();
    }

    onRadioClick(val: string) {
        (<FormControl>this.control).updateValue(val);
    }

    updateValue(val: any) {
        this.el.nativeElement.querySelector(`input[value="${val}"]`).setAttribute('checked', 'checked');
        (<FormControl>this.control).updateValue(val);
        this.changeDetectorRef.detectChanges();
    }
}
