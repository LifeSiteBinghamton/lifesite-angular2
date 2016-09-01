import { Component, ElementRef } from '@angular/core';

import { ChargebeeService } from '../chargebee.service';
import { LsLoader } from '../../common';
import { InvoiceModel, TransactionModel, User } from 'data';
import { DownloadUtility } from 'utility';

const STATE = {
    RECEIPTS: 'viewReceipts',
    INVOICE: 'viewInvoice'
};

@Component({
    selector: 'receipts',
    template: require('./receipts.html'),
    styles: [require('./_receipts.scss')],
    directives: [LsLoader],
    providers: [ChargebeeService]
})
export class Receipts {
    private state: string = STATE.RECEIPTS;
    private currencyCode: string = User.instance().subscription.currency_code;
    private isLoading: boolean;

    private currentInvoice: InvoiceModel;
    private invoices: InvoiceModel[];
    private transactions: TransactionModel[];

    constructor(private chargebeeService: ChargebeeService, private el: ElementRef) { }

    ngOnInit() {
        this.isLoading = true;
        this.chargebeeService
            .getInvoices()
            .finally(() => {
                this.isLoading = false;
            })
            .subscribe((invoices: InvoiceModel[]) => {
                this.invoices = invoices;
            }, (error) => {
                // todo error
            });
    }

    downloadInvoice(invoice: InvoiceModel) {
        if (invoice === null) {
            return;
        }

        this.isLoading = true;
        this.chargebeeService
            .getInvoicePdf(invoice.id)
            .finally(() => {
                this.isLoading = false;
            })
            .subscribe((url: string) => {
                DownloadUtility.downloadFile(url);
            }, (error) => {
                // todo error
            });
    }

    showInvoice(invoice: InvoiceModel) {
        this.state = STATE.INVOICE;
        this.currentInvoice = invoice;

        this.isLoading = true;
        this.chargebeeService.getTransactionsForInvoice(invoice.id)
            .finally(() => {
                this.isLoading = false;
            })
            .subscribe((transactions: TransactionModel[]) => {
                this.transactions = transactions;
            }, (error) => {
                // todo error
            });
    }
}
