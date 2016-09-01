import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NAV_CONFIG } from './nav.const';

@Component({
    selector: 'ls-nav',
    template: require('./ls-nav.html'),
    styles: [require('./_nav.scss')],
    directives: [ROUTER_DIRECTIVES],
    animations: [
        trigger('menuState', [
            state('expanded', style({
                width: '200px'
            })),
            state('unexpanded', style({
                width: '50px'
            })),
            transition('expanded <=> unexpanded', animate('100ms ease'))
        ])
    ]
})
export class LsNav {
    private navItems: any[] = NAV_CONFIG;
    private state: string = 'unexpanded';

    toggleMenu() {
        this.state = (this.state === 'expanded') ? 'unexpanded' : 'expanded';
    }
}
