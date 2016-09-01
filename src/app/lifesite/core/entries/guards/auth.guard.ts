import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from 'utility';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return Observable.fromPromise(new Promise((resolve) => {
            this.userService.getClient().subscribe(() => {
                resolve(true);
            }, () => {
                this.router.navigate(['']);
                resolve(false);
            });
        }));
    }
}
