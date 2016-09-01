import { Component } from '@angular/core';

import { LsAccordion, LsAccordionPane, LsSelect } from 'components';
import { LsOldMajorCategoryModel } from 'data';
import { OLD_MAJOR_CATEGORIES } from 'core';

@Component({
    selector: 'navigation-settings',
    template: require('./navigation-settings.html'),
    styles: [require('../../../components/widgets/_widget.scss')],
    directives: [LsAccordion, LsAccordionPane, LsSelect]
})
export class NavigationSettings {
    private profileOptions: [{display: string, value: string}] = [
        {display: 'Default', value: 'default'},
        {display: 'Minimal', value: 'minimal'},
        {display: 'Military', value: 'military'},
        {display: 'Financial', value: 'financial'}
    ];

    private alphaCategories: LsOldMajorCategoryModel[] = OLD_MAJOR_CATEGORIES;

    profileChange($event) {
        console.log($event);
    }
}
