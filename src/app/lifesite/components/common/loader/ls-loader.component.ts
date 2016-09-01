import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'ls-loader',
    template: `
        <div class="ls-loader ui inverted dimmer" [ngClass]="{'active': isLoading, 'ls-loader--cell': type === 'cell'}">
            <template [ngIf]="text">
                <div class="ui text loader">{{text}}</div>
            </template>
            <template [ngIf]="!text">
                <div class="ui loader"></div>
            </template>
        </div>
    `,
    styles: [`
        .ls-loader {
            background-color: rgba(255, 255, 255, .95) !important;
        }
        
        .ls-loader--cell {
            z-index: 1 !important;
        }
    `],
    directives: [NgClass]
})
export class LsLoader implements OnChanges {
    @Input() isLoading: boolean;
    @Input() delay: number;
    @Input() text: string;
    @Input() type: string = 'page';

    ngOnChanges(changes: SimpleChanges) {
        if (!this.delay || this.isLoading === true) {
            return;
        }

        this.isLoading = true;

        setTimeout(() => {
            this.isLoading = false;
        }, this.delay);
    }
}
