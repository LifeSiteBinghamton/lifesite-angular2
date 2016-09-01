import { Injectable, EventEmitter } from '@angular/core';

import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileItem } from 'ng2-file-upload/components/file-upload/file-item.class';

import { FileModel } from 'data';
import { FileUploadEventType, IFileUpload } from './file-upload.interface';

let getUrl = function (category: string) {
    return `http://localhost:3000/api/files/${category}/upload`;
};

@Injectable()
export class FileUploadHandler {
    public emitter: EventEmitter<IFileUpload> = new EventEmitter<IFileUpload>();

    private _uploaders: {[category: string]: FileUploader} = {};

    public getNewUploader(category: string): FileUploader {
        if (this._uploaders[category]) {
            return this._uploaders[category];
        }

        let uploader = new FileUploader({
            url: getUrl(category)
        });
        this._hooks(uploader, category);

        this._uploaders[category] = uploader;
        return uploader;
    }

    private _hooks(uploader: FileUploader, category: string) {
        uploader.onAfterAddingAll = (fileItems: FileItem[]) => {
            this.emitter.emit({
                category: category,
                event: FileUploadEventType.OnAfterAddingAll,
                files: fileItems
            });
        };

        uploader.onBuildItemForm = (fileItem: FileItem, form: FormData) => {
            this.emitter.emit({
                category: category,
                event: FileUploadEventType.OnBuildItemForm,
                file: fileItem,
                form: form
            });
        };

        uploader.onProgressAll = (progress: number) => {
            this.emitter.emit({
                category: category,
                event: FileUploadEventType.OnProgressAll,
                progress: progress
            });
        };

        uploader.onBeforeUploadItem = (fileItem: FileItem) => {
            this.emitter.emit({
                category: category,
                event: FileUploadEventType.OnBeforeUpload,
                file: fileItem
            });
        };

        uploader.onProgressItem = (fileItem: FileItem, progress: number) => {
            this.emitter.emit({
                category: category,
                event: FileUploadEventType.OnProgress,
                file: fileItem,
                progress: progress
            });
        };

        uploader.onCompleteItem = (fileItem: FileItem, response: any) => {
            let model = <FileModel>JSON.parse(response);

            this.emitter.emit({
                category: category,
                event: FileUploadEventType.OnComplete,
                file: fileItem,
                response: model
            });
        };

        uploader.onCompleteAll = () => {
            this.emitter.emit({
                category: category,
                event: FileUploadEventType.OnCompleteAll
            });
        }
    }
}
