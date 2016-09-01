import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { LsDataModel, User } from 'data';
import { BaseService } from './base.service';

@Injectable()
export class DataService extends BaseService {

    constructor(http: Http) {
        super(http);
    }

    getData(filter?: {where: {category: string}}): Observable<LsDataModel> {
        let url = `client/${User.userId}/data`;

        if (filter) {
            url = `client/${User.userId}/data?filter=${encodeURIComponent(JSON.stringify(filter))}`;
        }

        return this.makeRequest({
            method: BaseService.GET,
            url: url
        }).map((res) => {
            let data = res.json();
            return data.length ? data[0] : [];
        });
    }

    setData(category: string, data: {[key: string]: any}): Observable<any> {
        return this.makeRequest({
            method: BaseService.POST,
            url: `client/${User.userId}/data`,
            body: {
                category: category,
                json: data
            }
        });
    }
}
