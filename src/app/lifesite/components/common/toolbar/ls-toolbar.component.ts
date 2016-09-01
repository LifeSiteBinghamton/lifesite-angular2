import { Component, Output, Input, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

type ToolbarOptions = {
    allowDrag: boolean;
    allowSettings: boolean;
    allowHelp: boolean;
    allowMinimize: boolean;
    allowClose: boolean;
};

@Component({
    selector: 'ls-toolbar',
    template: require('./ls-toolbar.html'),
    styles: [require('./_ls-toolbar.scss')],
    directives: [NgClass]
})
export class LsToolbar {
    @Input() drag: boolean;
    @Input() settings: boolean;
    @Input() help: boolean;
    @Input() minimize: boolean;
    @Input() close: boolean;
    @Input() type: string = 'widget';

    @Output() onSettings: EventEmitter<any> = new EventEmitter<any>();
    @Output() onHelp: EventEmitter<any> = new EventEmitter<any>();
    @Output() onMinimze: EventEmitter<any> = new EventEmitter<any>();
    @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

    private options: ToolbarOptions;

    ngOnInit() {
        this.options = {
            allowDrag: this.drag !== undefined,
            allowSettings: this.settings !== undefined,
            allowHelp: this.help !== undefined,
            allowMinimize: this.minimize !== undefined,
            allowClose: this.close !== undefined
        };
    }
}

