import { Component, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { LsTab } from './ls-tab.component';

@Component({
    selector: 'ls-tabs',
    template: `
        <div class="ui top attached tabular menu">
            <a *ngFor="let tab of tabs" class="item" [class.active]="tab.active" (click)="selectTab(tab)">
                {{tab.tabTitle}}
            </a>
        </div>
        <ng-content></ng-content>
    `
})
export class LsTabs implements AfterContentInit {
    @Output() onClick: EventEmitter<LsTab> = new EventEmitter<LsTab>();
    @ContentChildren(LsTab) private tabs: QueryList<LsTab>;

    ngAfterContentInit() {
        let activeTabs = this.tabs.filter((tab) => tab.active);

        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    selectTab(tab: LsTab) {
        this._deactivateTabs();

        tab.active = true;
        this.onClick.emit(tab);
    }

    setActiveTab(id: string) {
        this._deactivateTabs();

        this.tabs.toArray().find((tab) => {
            return tab.tabId === id;
        }).active = true;
    }

    private _deactivateTabs() {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
    }
}
