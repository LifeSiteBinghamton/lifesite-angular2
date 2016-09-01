import { Component } from '@angular/core';

import { LsLoader } from '../../common';
import { ChargebeeService } from '../chargebee.service';
import { PlanModel, User } from 'data';

@Component({
    selector: 'plan',
    template: require('./plan.html'),
    styles: [require('./_plan.scss')],
    directives: [LsLoader],
    providers: [ChargebeeService]
})
export class Plan {
    private plans: PlanModel[];
    private currentPlan: string = User.instance().plan;
    private isLoading: boolean;

    constructor(private chargebeeService: ChargebeeService) {}

    ngOnInit() {
        this.isLoading = true;
        this.chargebeeService.getPlans().subscribe((plans) => {
            this.plans = plans;
            this.isLoading = false;
        });
    }
}
