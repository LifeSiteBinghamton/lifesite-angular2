import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { LsAccordionPane } from './ls-accordion-pane.component';

@Component({
    selector: 'ls-accordion',
    template: `
        <div class="ui styled accordion">
            <ng-content></ng-content>
        </div>
    `
})
export class LsAccordion implements AfterContentInit {
    @ContentChildren(LsAccordionPane) private panes: QueryList<LsAccordionPane>;

    ngAfterContentInit() {
        this.panes.forEach((pane) => {
            pane.toggle.subscribe((subscribedPane) => {
                // Track the current state before deactivating all panes
                let currentlyActive = subscribedPane.active;
                this._deactivatePanes();

                // Set the current state to !current state to trigger the expand/collapse
                subscribedPane.active = !currentlyActive;
                subscribedPane.state = (subscribedPane.active ? 'expanded' : 'collapsed');
            });
        });
    }

    _deactivatePanes() {
        this.panes.forEach((pane) => {
            pane.state = 'collapsed';
            pane.active = false;
        });
    }
}
