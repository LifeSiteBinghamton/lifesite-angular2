import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IValidator } from './ivalidator.interface';

@Component({
    selector: 'validator-messages',
    template: `
        <div [hidden]="valid" class="ui top pointing red basic label">
            <span>{{message}}</span>
        </div>
    `
})
export class ValidatorMessages {
    @Input() validators: IValidator[];
    @Input() control: FormControl;

    /**
     * Tests a control object and returns false if the object is both touched and invalid
     *
     * @return {boolean} Return whether or not the control item is valid and has been touched
     */
    get valid(): boolean {
        return !(!this.control.valid && this.control.touched);
    }

    /**
     * If the `control` has any errors, we should return the first available {@link IValidator} message. Else, we return
     * a blank string. Also, if the `control` has errors but the {@link ValidatorMessages} component hasn't been
     * supplied any `IValidators`, we can return an empty string.
     *
     * @return {string} The result of {@link IValidator#getMessage} or an empty string.
     */
    get message(): string {
        if (!this.control.errors) {
            return '';
        }

        let k = Object.keys(this.control.errors);
        if (!this.valid && k.length > 0) {
            let firstValidator = this.validators.find((validator: IValidator) => {
                return validator.getErrorKey() === k[0];
            });
            return firstValidator.getMessage();
        }
        return '';
    }
}
