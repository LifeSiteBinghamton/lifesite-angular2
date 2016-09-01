import { Directive, HostBinding } from '@angular/core';

import { LifeSiteThemeProvider } from './ls-theme.provider';
import { ITheme } from './ls-theme.interface';

/**
 * @directive
 * @name LifeSiteThemeRun
 * @description
 * Directive to provide all theme names. Binds to the class of the element it is placed on.
 */
@Directive({
    selector: '[lsTheme]'
})
export class LifeSiteThemeRun {
    /**
     * @type {string} classesString The string that represents all theme classes.
     */
    @HostBinding('class') classesString: string;

    /**
     * Constructor.
     *
     * @param {LifeSiteThemeProvider} lsThemeProvider The service that will provide our theme. We subscribe to it in
     *                                order to watch any changes that the user makes to their theme.
     */
    constructor(private lsThemeProvider: LifeSiteThemeProvider) {
        this.lsThemeProvider.themeBus.subscribe((theme: ITheme) => {
            this.themeChanged(theme);
        });
    }

    /**
     * On initialize, we should set the current theme. If the user has not been to the site before, or has never
     * changed their theme, the current theme should be {@link LifeSiteDefaultTheme}.
     */
    ngOnInit(): void {
        this.themeChanged(this.lsThemeProvider.getTheme());
    }

    /**
     * The user has changed the theme from somewhere (probably from the {@link ViewSettingsWidget}) - we should retrieve
     * what theme the user has changed to and set the class names on the current element.
     *
     * @param {ITheme} theme An instantiated `ITheme` object.
     */
    private themeChanged(theme: ITheme): void {
        this.classesString = `${theme.getClassNames()}`;
    }
}
