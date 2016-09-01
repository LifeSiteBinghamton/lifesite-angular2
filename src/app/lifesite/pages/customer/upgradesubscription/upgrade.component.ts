import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
    ChargebeeService,
    CreditCard,
    Estimate,
    LsLoader,
    Page
} from 'components';
import { UserService } from 'utility';

@Component({
    selector: 'upgrade',
    template: require('./upgrade.html'),
    styles: [require('../../../components/widgets/_widget.scss'), require('./_upgrade.scss')],
    directives: [LsLoader, Page, CreditCard, Estimate],
    providers: [ChargebeeService]
})
export class Upgrade {
    private planId: string;
    private isLoading: boolean;

    constructor(
        private route: ActivatedRoute, private userService: UserService,
        private router: Router, private chargebeeService: ChargebeeService
    ) {
        this.planId = this.route.snapshot.params['id'];
    }

    checkout(coupon: string) {
        this.isLoading = true;
        this.chargebeeService.createSubscription(this.planId, coupon).subscribe(() => {
            this.userService.refreshClient().subscribe(() => {
                this.router.navigate(['app/customer']).then(() => {
                    this.isLoading = false;
                });
            });
        });
    }
}
