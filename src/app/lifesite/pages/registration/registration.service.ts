import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { BaseService } from 'utility';
import { User } from 'data';

/**
 * @injectable
 * @name RegistrationService
 * @description
 * Service which handles all requests pertaining to registration, user validation, and user activation.
 */
@Injectable()
export class RegistrationService extends BaseService {
    constructor(http: Http) {
        super(http);
    }

    /**
     * Make a POST request to the server to create a new user by their email address
     *
     * @param {string} email User's email address
     *
     * @return {User} An instance of the created User object
     */
    register(email) {
        return this.makeRequest({
            method: BaseService.POST,
            url: 'client',
            body: {
                email: email
            }
        });
    }

    /**
     * Make a GET request to the server to validate the user's id and token, used to validate the email activation link
     *
     * @param {string} id The User's unique userid
     * @param {string} token The user's unique verification token
     *
     * @return {string} email Return the user's email address
     */
    validateUser(id, token) {
        return this.makeRequest({
            method: BaseService.GET,
            url: `client/${id}/verify?verificationToken=${token}`
        }).map((res: Response) => {
            return res.json().email;
        });
    }

    /**
     * Make a PUT request to the server to activate a registered user once they have chosen and confirmed their password
     *
     * @param {string} id The user's unique userid
     * @param {string} token The user's unique verification token
     * @param {string} password The user's chosen password
     * @param {string} passwordConfirm The user's confirmed password value which must match their password
     *
     * @return {user} Return an instance of the user
     */
    // TODO See if they want confirm password or not
    // activate(id, token, password, passwordConfirm) {
    activate(id, token, password) {
        return this.makeRequest({
            method: BaseService.PUT,
            url: `client/${id}/activate`,
            body: {
                verificationToken: token,
                password: password
                // passwordConfirm: passwordConfirm
            }
        });
    }
}
