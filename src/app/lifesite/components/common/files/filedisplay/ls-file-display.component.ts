import { Component, Input } from '@angular/core';

import { FileItem } from 'ng2-file-upload/components/file-upload/file-item.class';

import { FileModel } from 'data';
import { DownloadUtility, FileService } from 'utility';

import { LsLoader } from '../../loader';
import { FileUploadHandler } from '../file-upload-handler.service';
import { FileUploadEventType, IFileUpload } from '../file-upload.interface';

// ----------------------------------------------------------------------------------------------
// Utility functions relative to THIS CLASS ONLY
// ----------------------------------------------------------------------------------------------
// We need to extend `FileModel` to include a `processing` flag to tell our table if the file has been uploaded.
type ProcessingFile = FileModel & {processing: boolean};

let downloadUrl = function (category: string, fileId: string) {
    return !fileId ? '' : `http://localhost:3000/api/files/${category}/download/${fileId}`;
};

/**
 * The `LsFileDisplay` component controls the listing of files for a given category.
 */
@Component({
    selector: 'ls-file-display',
    template: require('./ls-file-display.html'),
    styles: [`
        .file-display__cell {
            height: 75px;
        }
        
        .file-display__cell--is-processing {
            position: relative;
        }
    `],
    directives: [LsLoader],
    providers: [FileService]
})
export class LsFileDisplay {
    // The category for this display. Only files of THIS category will be displayed in the table.
    @Input() category: string;

    // The list of files that are available in this table. They can be processing or not.
    private files: ProcessingFile[] = [];
    private isLoading: boolean = false;

    constructor(private fileUploadHandler: FileUploadHandler, private fileService: FileService) {}

    ngOnInit() {
        // Retrieve every file for this category.
        this.isLoading = true;
        this.fileService
            .getFilesByCategory(this.category)
            .finally(() => this.isLoading = false)
            .subscribe((files: FileModel[]) => {
                // For each file we retrieved, get a thumbnail preview if it has one.
                this.files = files.map((file) => {
                    if (file.metadata.thumbnail) {
                        file.metadata.url = downloadUrl(this.category, file.metadata.thumbnail);
                    }

                    return Object.assign(file, {processing: false});
                });
            }, (error) => {
                // todo - error
            });

        // Subscribe to the events that are emitted when files are uploaded.
        this.fileUploadHandler.emitter.subscribe((event: IFileUpload) => {
            this._handleEvent(event);
        });
    }

    downloadFile(file: FileModel) {
        DownloadUtility.downloadFile(downloadUrl(this.category, file._id));
    }

    deleteFile(deletedFile: FileModel) {
        this.fileService.deleteFile(this.category, deletedFile._id).subscribe(() => {
            let idx = this.files.findIndex((file) => {
                return file._id === deletedFile._id;
            });

            this.files.splice(idx, 1);
        });
    }

    /**
     * Handle only the {@link FileUploadEventType.OnBeforeUpload} and {@link FileUploadEventType.OnComplete} events.
     * These are used to tell our user that the file is either a) being processed, or b) has completed its upload.
     *
     * @param {IFileUpload} event The event that was emitted from our file uploader.
     */
    private _handleEvent(event: IFileUpload) {
        if (event.category !== this.category) {
            return;
        }

        switch (event.event) {
            case FileUploadEventType.OnAfterAddingAll:
                this._onAddAll(event.files);
                break;

            case FileUploadEventType.OnComplete:
                this._onComplete(event.file, event.response);
                break;

            default:
                return;
        }
    }

    private _onAddAll(fileItems: FileItem[]) {
        this.files.unshift(...fileItems.map((fileItem) => {
            return {
                filename: fileItem.file.name,
                processing: true
            };
        }));
    }

    private _onComplete(fileItem: FileItem, response: FileModel) {
        let idx = this.files.findIndex((file) => {
            return file.filename === fileItem.file.name && file.processing;
        });

        // If this file was an image, it probably has a thumbnail. We need to build a URL that directly relates to
        // the thumbnail file - in this case the URL is /files/:category/download/:thumbnail_id
        if (response.metadata.thumbnail) {
            response.metadata.url = downloadUrl(this.category, response.metadata.thumbnail);
        }
        // When we upload a file, we only have certain attributes (name, length) - but we can display a LOT more than
        // that once the server has actually responded with a successful file upload. So, we need to get rid of the
        // "processing" file (the original file that was uploaded), and we replace it with a "non-processing" file that
        // is a complete File object from the server.
        this.files.splice(idx, 1, Object.assign(response, {processing: false}));
    }
}
