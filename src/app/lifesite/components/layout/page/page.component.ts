import { Component } from '@angular/core';

import { LsToolbar, LsBreadcrumb, LsFileProgress } from '../../common';

@Component({
    selector: 'page',
    template: require('./page.html'),
    styles: [require('./_page.scss')],
    directives: [LsToolbar, LsBreadcrumb, LsFileProgress]
})
export class Page {
    private isLoading: boolean = false;
}
