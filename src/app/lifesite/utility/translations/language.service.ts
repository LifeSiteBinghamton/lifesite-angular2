import { Injectable, Inject } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { CookieService } from '../services/cookies.service';

/**
 * @service
 * @name LanguageService
 * @description
 * Wrapper for `ng2-translate`. We need to keep track of the current language manually, and then call the translate
 * library from within this class because of the way `ng2-translate` works. So, ng2-translate basically sets your
 * desired language, and then only reads ONE file from a directory. Well, I don't want to load a huge "en.json" file
 * with all of the translations in there; I want to load partial files such as "dashboard/en.json" which has the
 * translations for all components that exist on the dashboard. Therefore, we need to (a) set the language and then
 * (b) use `ng2-translate.getTranslation` with the PATH to the desired folder. This will load "{PATH}/{LANGUAGE}.json".
 */
@Injectable()
export class LanguageService {
    /**
     * @type {string} _currentLanguage The current language. E.g. `en`, `es`, `ge`.
     */
    private _currentLanguage: string;
    /**
     * @type {string} _defaultLang The default language. Currently `en` or `English (US)`.
     */
    private _defaultLang: string = 'en';

    constructor(private translate: TranslateService, private cookieService: CookieService) {
        let languageCookie = this.cookieService.get('lsLang');

        translate.setDefaultLang(languageCookie || this._defaultLang);
        this.currentLanguage = languageCookie || this._defaultLang;

        this._setCookie();
    }

    get currentLanguage(): string {
        return this._currentLanguage;
    }

    set currentLanguage(value: string) {
        this._currentLanguage = value;
        this.translate.currentLang = value;
    }

    /**
     * Get the translation file for a given `path`.
     *
     * @param {string} path The path to the file inside `assets/il8n`.
     */
    setTranslation(path: string) {
        this.translate.getTranslation(`${path}/${this.currentLanguage}`);
    }

    /**
     * Switch languages if the current language is different from `lang`.
     *
     * @param {string} path The path to the file inside `assets/il8n`.
     *
     * @param {string} lang The desired language to change to.
     */
    use(path: string, lang: string) {
        if (this.currentLanguage !== lang) {
            this.currentLanguage = lang;
            this._setCookie();
        }
        this.translate.use(`${path}/${lang}`);
    }

    /**
     * Sets a cookie on the user's machine to a different language. This means the language will be stored
     */
    private _setCookie() {
        this.cookieService.put('lsLang', this._currentLanguage);
    }
}
