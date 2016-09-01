import {
    Component,
    EventEmitter,
    OnInit,
    AfterViewInit,
    Input,
    Output,
    ViewChild,
    ElementRef
} from '@angular/core';
import { FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
    selector: 'ls-password',
    template: require('./ls-password.html'),
    styles: [require('./_ls-password.scss')],
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class LsPassword implements OnInit, AfterViewInit {
    @Input() buttonLabel: string;
    @Input() inputLabel: string = 'Password';
    @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('password') passwordRef: ElementRef;

    private password: HTMLInputElement;
    private passwordControl: FormControl;

    ngOnInit() {
        this.passwordControl = new FormControl('');
    }

    ngAfterViewInit(): any {
        this.password = this.passwordRef.nativeElement;
    }

    hasUppercase() {
        return /[A-Z]/.test(this.password.value);
    }

    hasNumber() {
        return /[0-9]/.test(this.password.value);
    }

    hasSymbol() {
        return /[!@#$%\^&*()<>_+\[\]{}?:;|'"\\,.\/~`\-=]/.test(this.password.value);
    }
}
