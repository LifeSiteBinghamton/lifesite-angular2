import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'au-entry',
    template: `
        <div class="container">
            <div class="left"></div>
            <div class="right">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styles: [require('./_au.scss')],
    directives: [ROUTER_DIRECTIVES]
})
export class AuEntry {}
