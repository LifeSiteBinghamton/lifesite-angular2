import { Component } from '@angular/core';

import { LsSelect } from 'components';
import { LanguageSelect } from 'utility';
import { LifeSiteThemeProvider } from '../../../core/theme/ls-theme.provider';

@Component({
    selector: 'view-settings',
    template: require('./view-settings.html'),
    styles: [require('../../../components/widgets/_widget.scss')],
    directives: [LsSelect, LanguageSelect]
})
export class ViewSettings {
    private themeOptions: Array<Object>;
    private fontOptions: Array<Object>;

    constructor(private theme: LifeSiteThemeProvider) {
        this.themeOptions = [
            {display: 'Default', value: 'lifesite-default-theme'},
            {display: 'Joe Mama', value: 'lifesite-joe-mama-theme'}
        ];

        this.fontOptions = [
            {display: 'Regular', value: 'regular'},
            {display: 'microscopic', value: 'microscopic'},
            {display: 'FUCKING HUGE', value: 'FUCKING-HUGE'}
        ];
    }

    themeChange(selectedTheme: string) {
        this.theme.setTheme(selectedTheme);
    }

    fontChange(selectedFont: string) {

    }
}
