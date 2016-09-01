/**
 * @interface
 * @name ITheme
 * @description
 * Interface for themes.
 */
export interface ITheme {
    /**
     * @type {string} themeName The theme's name.
     */
    themeName: string;
    /**
     * @type {string} fontThemeName The font-theme's name.
     */
    fontThemeName: string;

    /**
     * Get the concatenated string of all theme names.
     *
     * @return string Combines the `themeName` and `fontThemeName` and returns it to be used as a class name.
     */
    getClassNames(): string;
}
