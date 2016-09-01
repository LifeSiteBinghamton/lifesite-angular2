import { Component, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { SearchComponent } from './search';
import { MobileMenuComponent } from '../mobilemenu';

@Component({
    selector: 'ls-header',
    template: require('./header.html'),
    styles: [require('./_header.scss')],
    directives: [SearchComponent, MobileMenuComponent, ROUTER_DIRECTIVES]
})
export class LsHeader {
    @ViewChild(MobileMenuComponent) mobileMenu: MobileMenuComponent;
}
