import { WizardHandler } from './wizard-handler';

export interface IWizardStep {
    fields: string[];
    title?: string;
    description?: string;
}

export interface IWizard {
    steps: IWizardStep[];
    currentStepIdx: number;
}

// export class BaseWizard implements IWizard {
//     steps: IWizardStep[];
//
//     constructor(protected handler: WizardHandler) {}
//
//     next(): void {
//         this.handler.next();
//     }
//
//     back(): void {
//         this.handler.back();
//     }
//
//     setStep(idx: number) {
//         this.currentStepIdx = idx;
//     }
//
//     protected calculateCurrentStep(model: any): number {
//         let idx = 0;
//
//         for (let step of this.steps) {
//             let fields = step.fields;
//             let stepComplete = true;
//
//             for (let field of fields) {
//                 if (!model.getByKey(field)) {
//                     stepComplete = false;
//                     break;
//                 }
//             }
//
//             if (stepComplete) {
//                 idx++;
//             }
//         }
//
//         if (idx > this.steps.length) {
//             return -1;
//         }
//
//         return idx;
//     }
//
//     set currentStepIdx(idx: number) {
//         this.handler.currentStepIdx = idx;
//     }
//
//     get currentStepIdx(): number {
//         return this.handler.currentStepIdx;
//     }
// }
