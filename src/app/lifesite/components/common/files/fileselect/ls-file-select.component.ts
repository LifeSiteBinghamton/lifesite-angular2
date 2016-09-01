import { Component, Input } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

@Component({
    selector: 'ls-file-select',
    template: require('./ls-file-select.html'),
    directives: [FileSelectDirective]
})
export class LsFileSelect {
    @Input() uploader: FileUploader;
}
