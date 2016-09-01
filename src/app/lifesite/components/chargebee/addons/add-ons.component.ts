import { Component } from '@angular/core';

import { LsLoader } from '../../common';
import { ChargebeeService } from '../chargebee.service';
import { AddOnModel } from 'data';

@Component({
    selector: 'add-ons',
    template: require('./add-ons.html'),
    directives: [LsLoader],
    providers: [ChargebeeService]
})
export class AddOns {
    private isLoading: boolean;
    private addOns: AddOnModel[];

    constructor(private chargebeeService: ChargebeeService) {}

    ngOnInit() {
        this.isLoading = true;
        this.chargebeeService.getAddOns()
            .finally(() => {
                this.isLoading = false;
            })
            .subscribe((addOns: AddOnModel[]) => {
                this.addOns = addOns;
            }, (error) => {
                // todo - error
            });
    }
}
