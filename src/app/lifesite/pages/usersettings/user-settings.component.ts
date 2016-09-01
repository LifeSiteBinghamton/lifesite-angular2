import { Component } from '@angular/core';

import { Page, LsToolbar } from 'components';
import { LanguageService, UserService } from 'utility';
import { ChangePassword } from './changepassword';
import { ViewSettings } from './viewsettings';
import { NavigationSettings } from './navigationsettings';
import { TwoFactor } from './twofactor';

/**
 * @component
 * @name UserSettings
 * @description
 * Component container for the user settings page.  This component contains all of the user's settings widgets such as
 * account management and view settings.
 */
@Component({
    selector: 'settings',
    template: require('./user-settings.html'),
    styles: [require('../../components/widgets/_widget.scss')],
    directives: [
        ChangePassword,
        NavigationSettings,
        Page,
        TwoFactor,
        ViewSettings,
        LsToolbar
    ],
    providers: [UserService]
})
export class UserSettings {
    constructor(language: LanguageService, private userService: UserService) {
        language.setTranslation('account');
    }
}
