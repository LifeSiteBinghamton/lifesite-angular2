import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AuEntry, AppEntry } from './entries';

/**
 * @component
 * @name NotFound
 * @description
 * Component which represents a page or route that does not exist (HTTP Status Code 404).  Invalid routes are
 * redirected here.
 */
@Component({
    selector: 'not-found',
    template: require('./404.html')
})
export class NotFound {}

/**
 * @component
 * @name Core
 * @description
 * Main entry point for the router.  All entry points for the routers must be built on top of this class.
 * @see AppEntry
 * @see AuEntry
 */
@Component({
    selector: 'core',
    template: `<router-outlet></router-outlet>`,
    styles: [require('../../styles/_app.scss')],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})
export class Core {}
