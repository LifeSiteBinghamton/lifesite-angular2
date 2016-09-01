import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {
    AddOns,
    CreditCard,
    LsLoader,
    Page,
    Plan,
    Receipts,
    ChargebeeService
} from 'components';
import { User, SubscriptionModel, PlanModel } from 'data';

@Component({
    selector: 'customer',
    template: require('./customer.html'),
    styles: [require('../../components/widgets/_widget.scss'), `
        .widget-container:not(:last-child) {
            padding-bottom: 10px;
        }
        
        :host .credit-card {
            display: inline-block;
        }
    `],
    directives: [AddOns, CreditCard, Page, Plan, Receipts, LsLoader, ROUTER_DIRECTIVES],
    providers: [ChargebeeService]
})
export class Customer implements OnInit {
    private subscription: SubscriptionModel;
    private plan: PlanModel;
    private planId: string;
    private isLoading: boolean;

    constructor(private chargebeeService: ChargebeeService) {
        let user = User.instance();
        this.subscription = user.subscription;
        this.planId = user.plan;
    }

    ngOnInit() {
        this.isLoading = true;
        // TODO - error
        this.chargebeeService.getPlans().subscribe((plans) => {
            this.plan = plans.find((plan) => {
                return this.planId === plan.id;
            });
            this.isLoading = false;
        });
    }
}
