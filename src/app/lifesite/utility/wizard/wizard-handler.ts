import { Injectable, EventEmitter } from '@angular/core';
import { IWizardStep } from './wizard.interface';

@Injectable()
export class WizardHandler {
    private _currentStepIdx: number = 0;
    private _idxValue: EventEmitter<number> = new EventEmitter<number>();
    private _steps: IWizardStep[];

    constructor() {}

    set steps(_steps: IWizardStep[]) {
        this._steps = _steps;
    }

    get steps(): IWizardStep[] {
        return this._steps;
    }

    next(): void {
        if (++this._currentStepIdx > this.steps.length) {
            this._currentStepIdx = -1;
        }

        this._idxValue.emit((this._currentStepIdx));
    }

    back(): void {
        if (--this._currentStepIdx < 0) {
            this._currentStepIdx = 0;
        }

        this._idxValue.emit((this._currentStepIdx));
    }

    calculateCurrentStep(data: any): void {
        let idx = 0;

        for (let step of this.steps) {
            let complete = true;

            for (let field of step.fields) {
                if (!data[field]) {
                    complete = false;
                    break;
                }
            }

            if (complete) {
                idx++;
            }
        }

        this._idxValue.emit((this._currentStepIdx = idx === this.steps.length ? -1 : idx));
    }

    get stepChanges(): EventEmitter<number> {
        return this._idxValue;
    }
}
