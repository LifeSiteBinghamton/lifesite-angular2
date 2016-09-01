import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChargebeeService } from '../chargebee.service';
import { LsLoader } from '../../common';
import { EstimateModel, User, SubscriptionModel } from 'data';

const STATE = {
    COUPON: {
        SUCCESS: 'couponSuccess',
        ERROR: 'couponError'
    }
};

@Component({
    selector: 'estimate',
    template: require('./estimate.html'),
    styles: [require('./_estimate.scss')],
    directives: [LsLoader],
    providers: [ChargebeeService]
})
export class Estimate {
    public coupon: string;

    private estimate: EstimateModel;
    private subscription: SubscriptionModel = User.instance().subscription;
    private isLoading: boolean;
    private couponState: string;

    constructor(private route: ActivatedRoute, private chargebeeService: ChargebeeService) {}

    ngOnInit() {
        this._loadEstimate();
    }

    applyCoupon() {
        this._loadEstimate(this.coupon);
    }

    private _loadEstimate(coupon: string = '') {
        this.isLoading = true;
        // TODO add coupon for an estimate
        this.chargebeeService
            .getEstimate(this.route.snapshot.params['id'], this.subscription, coupon)
            .finally(() => {
                this.isLoading = false;
            })
            .subscribe((estimate: EstimateModel) => {
                if (coupon) {
                    this.couponState = STATE.COUPON.SUCCESS;
                }

                this.estimate = estimate;
            }, (error) => {
                // TODO - error
                if (coupon) {
                    this.couponState = STATE.COUPON.ERROR;
                }
            });
    }
}
