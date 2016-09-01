import { Component } from '@angular/core';

import {
    LsAccordion,
    LsAccordionPane,
    LsToolbar,
    Page
} from 'components';
import { LanguageService } from 'utility';
import { LsOldMajorCategoryModel } from 'data';
import { OLD_MAJOR_CATEGORIES } from 'core';

/**
 * @component
 * @name Dashboard
 * @description
 * Component container for the dashboard which contains the user's widgets in draggable panels.
 */
@Component({
    selector: 'dashboard',
    styles: [require('../../components/widgets/_widget.scss'), require('./_dashboard.scss')],
    template: require('./dashboard.html'),
    directives: [
        LsAccordion,
        LsAccordionPane,
        LsToolbar,
        Page
    ]
})
export class Dashboard {

    private alphaCategories: LsOldMajorCategoryModel[] = OLD_MAJOR_CATEGORIES;

    constructor(language: LanguageService) {
        language.setTranslation('dashboard');
    }

    // TODO Hook into navigation to sections
    goToTab(tab: any) {
        /* tslint:disable */
        console.log('Go to page: '+tab.id);
        /* tslint:enable */
    }
}
