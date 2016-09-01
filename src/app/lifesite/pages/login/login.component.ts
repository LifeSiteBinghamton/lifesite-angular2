import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { FormBuilder, Validators, FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { LanguageService, LanguageSelect, FocusDirective } from 'utility';
import { LoginService } from './login.service';
import { User } from 'data';

/**
 * @component Login
 * @name Login
 * @description
 * Component which represents the login form.  The login form prompts the user for their email address and
 * password, and submits this to the server via the {@link LoginService} to validate the user.
 */
@Component({
    selector: 'login',
    template: require('./login.html'),
    styles: [require('./_login.scss')],
    directives: [ROUTER_DIRECTIVES, FocusDirective, REACTIVE_FORM_DIRECTIVES, LanguageSelect],
    providers: [LoginService]
})
export class Login {
    private loginForm: FormGroup;
    private hasError = false;
    private statusCode = null;

    constructor(fb: FormBuilder,
                private loginService: LoginService,
                private router: Router,
                language: LanguageService) {
        language.setTranslation('login');

        this.loginForm = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        sessionStorage.clear();
        User.clear();
    }

    /**
     * Submits the login form to the server.
     */
    onSubmit() {
        // TODO - error
        this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(() => {
            this.router.navigateByUrl('onboarding');
        }, () => {
            this.hasError = true;
        });
    }
}
