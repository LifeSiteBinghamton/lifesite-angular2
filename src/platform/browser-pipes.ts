/*
 * These are globally available pipes in any template
 */

import { PLATFORM_PIPES } from '@angular/core';

// Translate
import { TranslatePipe as TRANSLATE_PIPE } from 'ng2-translate/ng2-translate';

// application_pipes: pipes that are global through out the application
export const APPLICATION_PIPES = [
    TRANSLATE_PIPE
];

export const PIPES = [
  { provide: PLATFORM_PIPES, multi: true, useValue: APPLICATION_PIPES }
];
