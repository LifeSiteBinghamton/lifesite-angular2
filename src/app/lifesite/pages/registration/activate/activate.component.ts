import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RegistrationService } from '../registration.service';
import { LsPassword, LsLoader } from 'components';

const STATE = {
    ACTIVATE: 'activate',
    WELCOME: 'welcome'
};

/**
 * @component
 * @name Activate
 * @description
 * Step 3 of 4 of the registration process.  The Activate component first validates the user's id and verificationToken
 * which are in the activation link.  If the link is invalid, the user is redirected to an invalid link page. If the
 * link is valid, the user is prompted to select and confirm their password.
 */
@Component({
    selector: 'activate',
    template: require('./activate.html'),
    styles: [require('./_activate.scss'), require('../_registration.scss')],
    directives: [LsPassword, LsLoader],
    providers: [RegistrationService]
})
export class Activate {
    /**
     * @type {string} currentUserId The ID that is passed to this component using `RouteParams`.
     */
    private currentUserId: string;
    /**
     * @type {string} currentToken The token that is passed to this component using `RouteParams`.
     */
    private currentToken: string;
    /**
     * @type {string} state The current state of the user, either ACTIVATE if they need to activate their account by
     * verifying their email, or WELCOME if they have already activated their account.
     */
    private state: string = STATE.ACTIVATE;

    private isLoading: boolean;

    /**
     * Constructor
     *
     * @param {RegistrationService} registrationService The service used for backend calls.
     * @param {Router} router The current Angular router.
     * @param {ActivatedRoute} route The parameters passed into this route through the URL.
     */
    constructor(private registrationService: RegistrationService, private router: Router, route: ActivatedRoute) {
        this.currentUserId = route.snapshot.params['id'];
        this.currentToken = route.snapshot.params['token'];
    }

    /**
     * Hits the backend with the form values, `currentUserId`, and `currentToken`.
     *
     * @param {any} formValue Values of the submitted form.
     *
     * @see RegistrationService#activate
     */
    createPassword(formValue: any): void {
        this.isLoading = true;
        // TODO - confirm password?
        this.registrationService
            .activate(this.currentUserId, this.currentToken, formValue.password)
            .finally(() => {
                this.isLoading = false;
            })
            .subscribe(
            () => { this.state = STATE.WELCOME; },
            (error) => {
                // TODO - error
            }
        );
    }

    goToLogin(): void {
        this.router.navigateByUrl('');
    }
}
