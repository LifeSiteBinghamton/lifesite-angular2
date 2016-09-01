import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppState } from 'core';
import { BaseService } from './base.service';
import { Cache } from './cache.service';
import { User } from 'data';

@Injectable()
export class UserService extends BaseService {
    constructor(http: Http, private state: AppState) {
        super(http);
    }

    public refreshClient(): Observable<User> {
        Cache.instance().forceClean();
        User.clear();
        return this.getClient();
    }

    public getClient(): Observable<User> {
        return this.makeRequest({
            method: BaseService.GET,
            url: `client/${User.userId}`
        }).map((res: Response) => {
            return User.instance(res.json());
        });
    }

    public saveClient(data): Observable<Response> {
        return this.makeRequest({
            method: BaseService.PUT,
            url: `client/${User.userId}`,
            body: data
        });
    }

    /**
     * Makes a PUT request to the server so the user can change their password
     *
     * @param {string} password The user's old password value
     * @param {string} newPassword The user's new password value
     */
    changePassword(password, newPassword): Observable<Response> {
        return this.makeRequest({
            method: BaseService.PUT,
            url: `client/${User.userId}/password`,
            body: {
                password: password,
                newPassword: newPassword
            }
        });
    }
}
