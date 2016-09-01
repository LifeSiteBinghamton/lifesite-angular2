import { Injector } from '@angular/core';

let injector: Injector;
export const appInjector = (i?: Injector): Injector => {
    if (i) {
        injector = i;
    }
    return injector;
};
