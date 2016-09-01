import { Component, ViewChild } from '@angular/core';

import { LsLoader, LsInput, LsPassword } from 'components';
import { UserService } from 'utility';

@Component({
    selector: 'change-password',
    template: require('./change-password.html'),
    directives: [LsLoader, LsInput, LsPassword],
    providers: [UserService]
})
export class ChangePassword {
    @ViewChild('curPassword', {read: LsInput}) currentPassword: LsInput;
    private isLoading: boolean = false;

    constructor(private userService: UserService) {}

    changePassword(data: {password: string}) {
        let control = this.currentPassword.$control;

        if (control.valid) {
            this.isLoading = true;
            this.userService
                .changePassword(control.value, data.password)
                .finally(() => {
                    this.isLoading = false;
                })
                .subscribe(() => {
                    // todo something?
                }, (error) => {
                    // todo error
                });
        } else {
            // todo - something?
        }
    }
}
