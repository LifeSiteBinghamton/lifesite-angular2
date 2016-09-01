// App
export * from './core';

import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { provide, ExceptionHandler } from '@angular/core';
import { TRANSLATE_PROVIDERS, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { FileUploadHandler } from 'components';
import { AppState, LifeSiteThemeProvider } from 'core';
import { RegistrationService } from 'pages';
import {
    HttpInterceptor,
    LanguageService,
    UserService,
    LSExceptionHandler,
    CookieService,
    FileService
} from 'utility';

// Application wide providers
export const APP_PROVIDERS = [
    TRANSLATE_PROVIDERS,
    AppState,
    LanguageService,
    RegistrationService,
    UserService,
    LifeSiteThemeProvider,
    CookieService,
    FileService,
    FileUploadHandler,
    {
        provide: Http,
        useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) =>
            new HttpInterceptor(backend, defaultOptions),
        deps: [XHRBackend, RequestOptions]
    },
    {
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/il8n', '.json'),
        deps: [Http]
    },
    {provide: Window, useValue: window} /*,
     provide(ExceptionHandler, {useClass: LSExceptionHandler})*/
];
