import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'ls-modal',
    template: require('./modal.html')
})
export class LsModal {
    @Input() closeOnEscape: boolean = true;
    @Input() closeOnOutsideClick: boolean = true;

    @Output() onOpen = new EventEmitter(false);
    @Output() onClose = new EventEmitter(false);

    @ViewChild('modalRoot') private modalRoot: ElementRef;

    private active = false;

    open(args: {[key: string]: any}) {
        this.active = true;
        this.onOpen.emit(args);
        window.setTimeout(() => this.modalRoot.nativeElement.focus(), 0);
    }

    close(args: {[key: string]: any}) {
        this.active = false;
        this.onClose.emit(args);
    }
}
