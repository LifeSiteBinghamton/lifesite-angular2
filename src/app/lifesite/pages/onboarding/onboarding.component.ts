import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { LsForm, LsInput, LsSubmit, Page } from 'components';
import { IWizard, IWizardStep, WizardHandler, UserService } from 'utility';
import { User } from 'data';

@Component({
    selector: 'onboarding',
    template: require('./onboarding.html'),
    styles: [require('./_onboarding.scss')],
    directives: [LsForm, LsInput, LsSubmit, Page],
    providers: [WizardHandler, UserService]
})
export class Onboarding implements IWizard, OnInit, AfterViewInit {
    @ViewChildren(LsForm) forms: QueryList<LsForm>;

    steps: IWizardStep[] = [
        {
            fields: ['first_name', 'last_name']
        }
    ];

    currentStepIdx: number = 0;

    constructor(private handler: WizardHandler, private router: Router, private service: UserService) {
        this.handler.steps = this.steps;

        this.handler.stepChanges.subscribe((stepIdx: number) => {
            this.currentStepIdx = stepIdx;

            if (this.currentStepIdx === -1) {
                this.router.navigateByUrl('app');
                return;
            }
        });
    }

    ngOnInit(): any {
        this.handler.calculateCurrentStep(User.toJson());
    }

    ngAfterViewInit(): any {
        this.forms.changes.subscribe(() => {
            this.forms.first.setData(User.toJson());
        });
    }

    next(event: Event) {
        event.preventDefault();
        this.service.saveClient(this.forms.first.value).subscribe(() => {
            this.handler.next();
        });
    }

    back(event: Event): void {
        event.preventDefault();
        this.handler.back();
    }
}
