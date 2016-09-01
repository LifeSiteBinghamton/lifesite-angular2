import { Component, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ChargebeeService } from '../chargebee.service';
import { CreditCardPipe } from './creditcard.pipe';
import { CreditCardModel } from 'data';

@Component({
    selector: 'credit-card',
    template: require('./creditcard.html'),
    styles: [require('./_creditcard.scss')],
    directives: [ ROUTER_DIRECTIVES],
    pipes: [CreditCardPipe],
    providers: [ChargebeeService]
})
export class CreditCard {
    public existingCard: CreditCardModel;

    constructor(private chargebeeService: ChargebeeService) {}

    ngOnInit() {
        this.chargebeeService.getCreditCard()
            .subscribe((creditCard: CreditCardModel) => {
                this.existingCard = creditCard;
            }, (error) => {
                // todo - error
                if (error && error.code === 'MODEL_NOT_FOUND') {
                    this.existingCard = null;
                }
            });
    }

    get value() {
        return this.existingCard;
    }
}
