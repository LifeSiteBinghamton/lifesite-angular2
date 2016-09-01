import { Directive, ElementRef } from '@angular/core';

/**
 * @directive
 * @name FocusDirective
 * @description
 * Sets the focus for the 'focusMe' directive.
 */
@Directive({
    selector: '[focusMe]'
})
 export class FocusDirective {
    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        this.el.nativeElement.focus();
    }
}
