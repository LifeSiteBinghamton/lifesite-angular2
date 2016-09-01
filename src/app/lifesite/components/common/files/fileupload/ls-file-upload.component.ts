import { Component, Input, ViewChild } from '@angular/core';

import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileItem } from 'ng2-file-upload/components/file-upload/file-item.class';

import { LsAccordion, LsAccordionPane } from '../../accordion';
import { LsModal } from '../../modal';
import { LsLoader } from '../../loader';
import { LsFileDisplay } from '../filedisplay';
import { LsFileDrop } from '../filedrop';
import { LsFileSelect } from '../fileselect';
import { FileUploadHandler } from '../file-upload-handler.service';
import { FileUploadEventType, IFileUpload } from '../file-upload.interface';

@Component({
    selector: 'ls-file-upload',
    template: require('./ls-file-upload.html'),
    directives: [LsLoader, LsFileDrop, LsFileSelect, LsFileDisplay, LsModal, LsAccordion, LsAccordionPane]
})
export class LsFileUpload {
    @Input() category: string;
    @ViewChild(LsModal) modal: LsModal;

    private uploader: FileUploader;
    private _filesToBeBuilt: FileItem[] = [];

    constructor(private fileUploadHandler: FileUploadHandler) {}

    ngOnInit() {
        this.uploader = this.fileUploadHandler.getNewUploader(this.category);

        this.fileUploadHandler.emitter.subscribe((event: IFileUpload) => {
            if (event.category !== this.category) {
                return;
            }

            switch (event.event) {
                case FileUploadEventType.OnAfterAddingAll:
                    this._onAddedAll(event.files);
                    break;

                case FileUploadEventType.OnBuildItemForm:
                    this._buildMetadata(event.file, event.form);
                    break;

                default:
                    return;
            }
        });
    }

    private _onAddedAll(files: FileItem[]) {
        this._filesToBeBuilt = files.map((file) => {
            file.formData = {metadata: {}};
            return file;
        });
        this.modal.open(null);
    }

    private _onCloseModal() {
        this._filesToBeBuilt.forEach((file) => {
            file.upload();
        });
    }

    private _buildMetadata(file: FileItem, form: FormData) {
        Object.keys(file.formData.metadata).forEach((key) => {
            form.append(key, file.formData.metadata[key]);
        });
    }
}
