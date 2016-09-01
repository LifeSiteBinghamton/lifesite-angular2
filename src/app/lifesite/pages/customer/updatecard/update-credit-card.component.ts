import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

import {
    ChargebeeService,
    LsForm,
    LsInput,
    LsSelect,
    LsSubmit,
    LsLoader,
    Page
} from 'components';
import { MONTHS, YEARS, STATES } from 'core';
import { CreditCardModel } from 'data';

@Component({
    selector: 'update-credit-card',
    template: require('./update-credit-card.html'),
    styles: [require('../../../components/widgets/_widget.scss'), require('./_update-credit-card.scss')],
    directives: [Page, LsForm, LsInput, LsSelect, LsSubmit, LsLoader],
    providers: [ChargebeeService, Location]
})
export class UpdateCreditCard implements AfterViewInit {
    @ViewChild(LsForm) private creditCardForm: LsForm;

    private monthList = MONTHS;
    private yearList = YEARS;
    private stateList = STATES;
    private isLoading: boolean;

    constructor(private routeLocation: Location, private chargebeeService: ChargebeeService) {}

    ngAfterViewInit() {
        this.chargebeeService.getCreditCard()
            .subscribe((creditCard: CreditCardModel) => {
                this.creditCardForm.setData(creditCard);
            }, (error) => {
                if (error && error.message === 'MODEL_NOT_FOUND') {
                    // TODO - error
                }
            });
    }

    submitForm(form: {value: any, id?: string}) {
        this.isLoading = true;
        this.chargebeeService.updateCreditCard(form.value).subscribe(() => {
            this.isLoading = false;
            this.routeLocation.back();
        }, (error) => {
            // TODO - error
        });
    }
}
