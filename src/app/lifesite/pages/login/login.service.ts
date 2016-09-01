import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { BaseService } from '../../utility';
import { User } from '../../data';

/**
 * @service
 * @name LoginService
 * @description
 * Service for the login page.  Makes API request to /client/login which allows the user to submit their email address
 * and password to be authenticated on the server.  The request results are returned via JSON format and embedded
 * inside a User instance
 */
@Injectable()
export class LoginService extends BaseService {
    constructor(http: Http) {
        super(http);
    }

    /**
     * Makes a POST request to the server to allow the user to login and create a session
     *
     * @param {string} email The user's email address
     * @param {string} password The user's password
     * @return {User} An instance of a {@link User}.
     */
    login(email, password) {
        return this.makeRequest({
            method: BaseService.POST,
            url: 'client/login',
            body: {
                email: email,
                password: password
            }
        }).map((res: Response) => {
            User.userId = res.json().accessToken.userId;
            return true;
        });
    }
}
