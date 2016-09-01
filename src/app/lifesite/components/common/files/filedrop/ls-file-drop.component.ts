import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

import { FileUploader, FILE_UPLOAD_DIRECTIVES } from 'ng2-file-upload/ng2-file-upload';

@Component({
    selector: 'ls-file-drop',
    template: require('./ls-file-drop.html'),
    styles: [require('./_ls-file-drop.scss')],
    directives: [NgClass, FILE_UPLOAD_DIRECTIVES]
})
export class LsFileDrop {
    @Input() uploader: FileUploader;
    @Output() onDrop: EventEmitter<File[]> = new EventEmitter<File[]>();

    private hasFileOver: boolean = false;

    fileIsOver(e: any) {
        this.hasFileOver = e;
    }

    filesDropped(files: File[]) {
        this.onDrop.emit(files);
    }
}
