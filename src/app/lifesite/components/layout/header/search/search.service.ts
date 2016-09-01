import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface SearchInfo {
    tag: string;
    href: string;
}

/**
 * @injectable
 * @name SearchService
 * @description Load the search data from JSON when the SearchComponent is initialized.
 */
@Injectable()
export class SearchService {

    constructor(private http: Http) { }

    loadJson(): Observable<any> {
        return this.http.get('assets/mock-data/search.json')
            .map((res) => {
                let ret: SearchInfo[] = [];
                let json = res.json();
                for (let key in json) {
                    if (!json.hasOwnProperty(key)) {
                        continue;
                    }

                    json[key].data.map((tag) => {
                        ret.push({
                            tag: tag,
                            href: json[key].href
                        });
                    });
                }

                return ret;
            });
    }
}
