import { ITheme } from './ls-theme.interface';

/**
 * @class
 * @name LifeSiteDefaultTheme
 * @description
 * Implements `ITheme`. This is the default theme.
 */
export class LifeSiteDefaultTheme implements ITheme {
    themeName: string = 'lifesite-default-theme';
    fontThemeName: string = 'lifesite-default-font';

    getClassNames(): string {
        return `${this.themeName} ${this.fontThemeName}`;
    }
}

export class LifeSiteJoeMamaTheme implements ITheme {
    themeName: string = 'lifesite-joe-mama-theme';
    fontThemeName: string = 'lifesite-default-font';

    getClassNames(): string {
        return `${this.themeName} ${this.fontThemeName}`;
    }
}
