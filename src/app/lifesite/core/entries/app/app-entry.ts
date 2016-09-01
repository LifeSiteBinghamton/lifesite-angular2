import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { LifeSiteThemeRun } from '../../theme';
import { LsFileProgress, LsNav, LsHeader, LsFooter } from 'components';
import { UserService } from 'utility';


/**
 * @component
 * @name AppEntry
 * @description
 * Main router entry point for the App Application once a user is authenticated.
 */
@Component({
    selector: 'app-entry',
    template: `
        <div lsTheme>
            <ls-header></ls-header>
            <div class="wrapper">
                <div class="nav-wrapper">
                    <ls-nav></ls-nav>
                </div>
                <router-outlet></router-outlet>
            </div>
            <ls-file-progress></ls-file-progress>
            <ls-footer></ls-footer>
        </div>
    `,
    styles: [require('./_entry.scss')],
    directives: [LifeSiteThemeRun, LsFileProgress, LsNav, LsHeader, LsFooter, ROUTER_DIRECTIVES],
    providers: [UserService]
})
export class AppEntry {}
