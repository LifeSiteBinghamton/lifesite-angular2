import {
    Component,
    Input,
    Output,
    EventEmitter,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

@Component({
    selector: 'ls-accordion-pane',
    template: `
        <div class="title" [class.active]="active" (click)="toggleActive()">
            <i class="dropdown icon"></i>
            {{paneTitle}}
        </div>
        <div class="accordion__content-wrapper" @activeState="state">
            <div class="accordion__content">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .accordion__content-wrapper {
            overflow: hidden;
        }
        .accordion__content {
            padding: 7px 13px 20px;
        }
    `],
    animations: [
        trigger('activeState', [
            state('expanded', style({
                'max-height': 1000,
                'padding-top': '*',
                'padding-bottom': '*'
            })),
            state('collapsed', style({
                'max-height': 0,
                'padding-top': 0,
                'padding-bottom': 0
            })),
            transition('expanded => collapsed', animate('300ms ease-out')),
            transition('collapsed => expanded', animate('500ms ease-in'))
        ])
    ]
})
export class LsAccordionPane {
    @Input() public paneTitle: string;
    public toggle: EventEmitter<any> = new EventEmitter<any>();
    public active: boolean = false;
    public state: string = 'collapsed';

    toggleActive() {
        this.toggle.emit(this);
    }
}
