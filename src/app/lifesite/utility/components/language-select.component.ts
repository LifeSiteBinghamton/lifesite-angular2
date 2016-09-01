import { Component, Input, ViewChild, AfterViewInit, forwardRef } from '@angular/core';

import { LsSelect } from 'components';
import { LanguageService } from '../translations';

const LABEL_TRANSLATIONS = {
    en: 'Select Your Language',
    es: 'Elige Tu Idioma',
    ko: '언어를 선택'
};

@Component({
    selector: 'language-select',
    template: `
        <ls-select id="lang" display="{{translatedLabel}}" [options]="langOptions"
                       (onChange)="languageChange($event)"></ls-select>
    `,
    styles: [],
    directives: [forwardRef(() => LsSelect)]
})
export class LanguageSelect implements AfterViewInit {
    @ViewChild(forwardRef(() => LsSelect)) select: LsSelect;
    @Input() private currentPage: string;

    private langOptions: [{display: string, value: string}];
    private translatedLabel: string;

    constructor(private language: LanguageService) {
        this.langOptions = [
            {display: 'English (US)', value: 'en'},
            {display: 'Español', value: 'es'},
            {display: 'Korean', value: 'ko'}
        ];
    }

    ngOnInit() {
        this._setLabel();
    }

    ngAfterViewInit() {
        this.select.updateValue(this.language.currentLanguage);
    }

    languageChange(selectedLanguage: string) {
        this.language.use(this.currentPage, selectedLanguage);
        this._setLabel();
    }

    private _setLabel() {
        this.translatedLabel = LABEL_TRANSLATIONS[this.language.currentLanguage];
    }
}
