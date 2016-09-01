import { Injectable, EventEmitter } from '@angular/core';

import { ITheme } from './ls-theme.interface';
import { LifeSiteDefaultTheme, LifeSiteJoeMamaTheme } from './lifesite-themes';

/**
 * @service
 * @name LifeSiteThemeProvider
 * @description
 * Provides the current theme and ways to set the theme.
 */
@Injectable()
export class LifeSiteThemeProvider {
    /**
     * @type {EventEmitter<ITheme>} themeBus Pub/sub for theme events. Any class that wants to watch for any theme
     *                                       changes should subscribe to this event emitter.
     */
    public themeBus: EventEmitter<ITheme> = new EventEmitter<ITheme>();

    /**
     * @type {Array} themes List of all available {@link ITheme}s.
     */
    private themes: Array<{name: string, theme: ITheme}> = [
        {name: 'lifesite-default-theme', theme: new LifeSiteDefaultTheme()},
        {name: 'lifesite-joe-mama-theme', theme: new LifeSiteJoeMamaTheme()}
    ];
    /**
     * @type {ITheme} currentTheme The currently-set theme. Defaults to {@link LifeSiteDefaultTheme}.
     */
    private currentTheme: ITheme = this.themes[0].theme;

    /**
     * @returns {ITheme} Returns the current theme.
     */
    public getTheme(): ITheme {
        return this.currentTheme;
    }

    /**
     * Finds the {@link ITheme} based on a string (`theme`).
     *
     * @param {string} theme Try to set a theme based on the theme's name.
     * @see ITheme#themeName
     */
    public setTheme(theme: string): void {
        let found = this.themes.find((ele) => {
            return ele.name === theme;
        });
        if (found) {
            this.currentTheme = found.theme;
            this.themeBus.emit(this.currentTheme);
        }
    }
}
