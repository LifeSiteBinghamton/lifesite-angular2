import { Component } from '@angular/core';

import { Page, LsFileUpload } from 'components';

@Component({
    selector: 'file-vault',
    template: require('./file-vault.html'),
    directives: [Page, LsFileUpload]
})
export class FileVault {

}
