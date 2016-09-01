import { Component } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

interface ABreadcrumb {
    url: string;
    name: string;
    parents?: ABreadcrumb[];
}

@Component({
    selector: 'ls-breadcrumb',
    template: require('./ls-breadcrumb.html'),
    styles: [require('./_breadcrumb.scss')],
    directives: [ROUTER_DIRECTIVES]
})
export class LsBreadcrumb {
    // todo - language

    private breadcrumbs: ABreadcrumb[] = [];

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        let data = this.route.snapshot.data;
        let parents: ABreadcrumb[] = data['parents'];

        // Each parent route
        if (parents) {
            parents.forEach((parent) => {
                this.breadcrumbs.push(parent);
            });
        }
        // Current route
        this.breadcrumbs.push({
            url: this.router.url,
            name: data['name']
        });
    }
}
