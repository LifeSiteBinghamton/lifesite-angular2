import { Component } from '@angular/core';

/**
 * @component
 * @name Invalid
 * @description Error page showing the user that the link clicked in their email was incorrect.  This page is triggered
 * when the user's id and verification token cannot be validated via the validate user service call, or when the page is
 * hit with invalid credentials.
 */
@Component({
    selector: 'invalid',
    template: require('./invalid.html'),
    styles: [require('../_registration.scss')],
    directives: []
})
export class Invalid {
}
