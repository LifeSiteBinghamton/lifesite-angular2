import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RegistrationService } from 'pages';

@Injectable()
export class ActivationGuard implements CanActivate {

    constructor(private registrationService: RegistrationService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return Observable.fromPromise(new Promise((resolve) => {
            this.registrationService.validateUser(route.params['id'], route.params['token']).subscribe(() => {
                resolve(true);
            }, () => {
                this.router.navigate(['../invalid']);
                resolve(false);
            });
        }));
    }
}
