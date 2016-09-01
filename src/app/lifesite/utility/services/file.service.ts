import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { FileModel } from 'data';
import { BaseService } from './base.service';

@Injectable()
export class FileService extends BaseService {

    constructor(http: Http) {
        super(http);
    }

    getFilesByCategory(category: string): Observable<FileModel[]> {
        let url = category === '*' ? `files` : `files/${category}/files`;

        return this.makeRequest({
            method: BaseService.GET,
            url: url
        }).map(res => res.json());
    }

    editFile(
        category: string,
        fileId: string,
        metadata: {
            container: string,
            filename: string,
            comment: string,
            mimetype: string,
            userid: string
        }
    ): Observable<Response> {
        return this.makeRequest({
            method: BaseService.PUT,
            url: `files/${category}/files/${fileId}`,
            body: {metadata: metadata}
        }, true);
    }

    deleteFile(category: string, fileId: string): Observable<Response> {
        return this.makeRequest({
            method: BaseService.DELETE,
            url: `files/${category}/files/${fileId}`
        }, true);
    }
}
