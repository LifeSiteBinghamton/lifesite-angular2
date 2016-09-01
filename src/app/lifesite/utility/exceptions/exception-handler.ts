import { Inject, ExceptionHandler } from '@angular/core';

export class LSExceptionHandler extends ExceptionHandler {

    constructor(@Inject(Window) private window: Window) {
        super(null, true);
    }

    call(exception: any, stackTrace?: any, reason?: string): void {
        (<any>this.window).Raven.captureException(exception);
    }
}
