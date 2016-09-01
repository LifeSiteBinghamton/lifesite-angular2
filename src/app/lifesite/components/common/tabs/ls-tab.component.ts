import { Component, Input } from '@angular/core';

@Component({
    selector: 'ls-tab',
    template: `
        <div class="ui bottom attached tab segment" [class.loading]="loading" [class.active]="active">
            <ng-content></ng-content>
        </div>
    `
})
export class LsTab {
    public loading: boolean = false;
    public active: boolean = false;

    @Input() tabId: string;
    @Input() private tabTitle: string;
}
