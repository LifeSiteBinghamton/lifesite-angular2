import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { SearchComponent } from '../header/search';


@Component({
    selector: 'mobile-menu',
    template: require('./ls-mobilemenu.html'),
    styles: [require('./_mobilemenu.scss')],
    directives: [ROUTER_DIRECTIVES, SearchComponent],
    animations: [
        trigger('menuState', [
            state('expanded', style({
                width: '400px'
            })),
            state('unexpanded', style({
                width: '0'
            })),
            transition('unexpanded => expanded', animate('100ms ease'))
        ])
    ]
})
export class MobileMenuComponent {

    private state: string = 'unexpanded';

    toggleMobileMenu() {
        this.state = (this.state === 'expanded') ? 'unexpanded' : 'expanded';
    }
}
