/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';
// Angular 2 Router
import { provideRouter } from '@angular/router';
// Angular 2 forms
import { disableDeprecatedForms, provideForms } from '@angular/forms';
// RxJs
import 'rxjs/Rx';

// AngularClass
// import {provideWebpack} from '@angularclass/webpack-toolkit';

import { routes, ActivationGuard, AuthGuard } from '../app/lifesite';
/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
export const APPLICATION_PROVIDERS = [
    // new Angular 2 forms
    disableDeprecatedForms(),
    provideForms(),

    provideRouter(routes),
    ActivationGuard,
    AuthGuard,
    // provideWebpack(asyncRoutes),

    ...HTTP_PROVIDERS,

    {provide: LocationStrategy, useClass: HashLocationStrategy}
];

export const PROVIDERS = [
    ...APPLICATION_PROVIDERS
];
