import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { BaseService } from 'utility';
import {
    AddOnModel,
    CreditCardModel,
    EstimateModel,
    InvoiceModel,
    PlanModel,
    SubscriptionModel,
    TransactionModel,
    User
} from 'data';

@Injectable()
export class ChargebeeService extends BaseService {

    constructor(http: Http) {
        super(http);
    }

    cancelSubscription(formData) {
        console.log('cancel request received in chargebee service');
        return;
    }

    getPlans(): Observable<PlanModel[]> {
        return this.makeRequest({
            method: BaseService.GET,
            url: `plans`
        }, true).map(res => res.json());
    }

    getInvoices(): Observable<InvoiceModel[]> {
        return this.makeRequest({
            method: BaseService.GET,
            url: `client/${User.userId}/customer/invoices`
        }).map((res) => {
            return res.json().list.map((invoice) => {
                return invoice.invoice;
            });
        });
    }

    getInvoicePdf(invoiceId: string): Observable<any> {
        return this.makeRequest({
            method: BaseService.GET,
            url: `client/${User.userId}/customer/invoices/${invoiceId}/download`
        }).map((res) => {
            return res.json();
        });
    }

    getTransactionsForInvoice(invoiceId: string): Observable<TransactionModel[]> {
        return this.makeRequest({
            method: BaseService.GET,
            url: `client/${User.userId}/customer/invoice/${invoiceId}/transactions`
        }, true).map((res) => {
            return res.json().list.map((transaction) => {
                return transaction.transaction;
            });
        });
    }

    getCreditCard(): Observable<CreditCardModel> {
        return this.makeRequest({
            method: BaseService.GET,
            url: `client/${User.userId}/customer/card`
        }).map(res => res.json());
    }

    updateCreditCard(formData): Observable<CreditCardModel> {
        return this.makeRequest({
            method: BaseService.POST,
            url: `client/${User.userId}/customer/card`,
            body: Object.assign(formData, {
                first_name: User.instance().firstName,
                last_name: User.instance().lastName
            })
        }).map(res => res.json());
    }

    getEstimate(plan: string,
                subscription: SubscriptionModel | {id: string} = {id: undefined},
                coupon: string = ''): Observable<EstimateModel> {
        let url = (subscription.id)
            ? `client/${User.userId}/customer/subscription/${plan}/estimate` : `plans/${plan}/estimate`;

        return this.makeRequest({
            method: BaseService.POST,
            url: url,
            body: {
                coupon: coupon,
                subscription_id: subscription.id
            }
        }, true).map(res => res.json().estimate);
    }

    createSubscription(plan: string, coupon: string = ''): Observable<any> {
        return this.makeRequest({
            method: BaseService.POST,
            url: `client/${User.userId}/customer/subscription`,
            body: {
                plan_id: plan,
                coupon: coupon
            }
        }).map(res => res.json());
    }

    getAddOns(): Observable<AddOnModel[]> {
        return this.makeRequest({
            method: BaseService.GET,
            url: `addons`
        }, true).map(res => res.json());
    }
}
