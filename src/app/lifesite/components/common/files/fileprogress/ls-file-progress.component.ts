import { Component, Input } from '@angular/core';
import { FileItem } from 'ng2-file-upload/components/file-upload/file-item.class';

import { FileModel } from 'data';
import { LsToolbar } from '../../toolbar';
import { FileUploadHandler } from '../file-upload-handler.service';
import { FileUploadEventType, IFileUpload } from '../file-upload.interface';

type ProcessingFile = FileModel & {
    processing: boolean,
    progress: number,
    isSuccess: boolean
};

@Component({
    selector: 'ls-file-progress',
    template: require('./ls-file-progress.html'),
    styles: [require('./_ls-file-progress.scss'), require('../../../widgets/_widget.scss')],
    directives: [LsToolbar]
})
export class LsFileProgress {

    private files: ProcessingFile[] = [];
    private totalProgress: number = 0;
    private processStarted: boolean = false;
    private allComplete: boolean = false;
    private isMinimized: boolean = false;
    private isClosed: boolean = true;

    constructor(private fileUploadHandler: FileUploadHandler) {}

    ngOnInit() {
        this.fileUploadHandler.emitter.subscribe((event: IFileUpload) => {
            this.handleEvent(event);
        });
    }

    private handleEvent(event: IFileUpload) {
        switch (event.event) {
            case FileUploadEventType.OnAfterAddingAll:
                this._onAddAll(event.files);
                break;

            case FileUploadEventType.OnBeforeUpload:
                this.processStarted = true;
                this.isClosed = false;
                break;

            case FileUploadEventType.OnProgress:
                let file = this.getProcessingFile(event.file);
                file.progress = event.progress;
                break;

            case FileUploadEventType.OnProgressAll:
                this.totalProgress = event.progress;
                break;

            case FileUploadEventType.OnComplete:
                this._onComplete(event.file, event.progress);
                break;

            case FileUploadEventType.OnCompleteAll:
                this.allComplete = true;
                this.processStarted = false;
                break;

            default:
                break;
        }
    }

    private _onAddAll(fileItems: FileItem[]) {
        this.files.unshift(...fileItems.map((fileItem) => {
            return {
                filename: fileItem.file.name,
                length: fileItem.file.size,
                processing: true,
                progress: 0,
                isSuccess: false
            };
        }));
    }

    private _onComplete(fileItem: FileItem, progress: number) {
        let file = this.getProcessingFile(fileItem);
        file = Object.assign(file, {
            processing: false,
            progress: 100,
            isSuccess: true
        });
    }

    private getProcessingFile(fileItem: FileItem): ProcessingFile {
        return this.files.find((file) => {
            return file.filename === fileItem.file.name && file.processing;
        });
    }
}
