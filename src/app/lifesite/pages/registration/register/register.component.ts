import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { LanguageService, LanguageSelect, FocusDirective } from 'utility';
import { RegistrationService } from '../registration.service';

/**
 * @component
 * @name Registration
 * @description
 * Step 1 of 4 of the registration process.  Component which shows the user a form where their email address is entered.
 * On success the user is redirected to a page where they are informed that an email has been sent with subsequent
 * instructions.
 */
@Component({
    selector: 'register',
    directives: [FocusDirective, REACTIVE_FORM_DIRECTIVES, LanguageSelect],
    providers: [RegistrationService],
    styles: [require('./_register.scss')],
    template: require('./register.html')
})
export class Register {
    private emailSent: boolean = false;
    private registerForm: FormGroup;
    private isLoading = false;

    constructor(fb: FormBuilder, private registrationService: RegistrationService, language: LanguageService) {
        this.registerForm = fb.group({
            email: ['', Validators.required]
        });

        language.setTranslation('registration');
    }

    /**
     * Submit the user's email to the Registration Service
     *
     * @param  {object}   event The form which contains the user's email
     */
    onSubmit(event) {
        this.isLoading = true;

        this.registrationService.register(this.registerForm.value.email).subscribe(
            () => {
                this.emailSent = true;
                this.isLoading = false;
            }, error => {
                // TODO: error handling
                this.isLoading = false;
                console.log(error);
            }
        );
    }
}
