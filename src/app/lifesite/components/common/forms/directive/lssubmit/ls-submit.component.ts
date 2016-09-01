import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'ls-submit',
    template: require('./ls-submit.html')
})
export class LsSubmit implements OnInit {
    @Input() display: string;

    private isValid: boolean = true;

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): any {
        this.isValid = true;
    }

    get valid(): boolean {
        return this.isValid;
    }

    set valid(bool: boolean) {
        this.isValid = bool;
        this.changeDetectorRef.detectChanges();
    }
}
