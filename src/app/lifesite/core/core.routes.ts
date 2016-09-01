import { RouterConfig } from '@angular/router';

import {
    Activate,
    Customer,
    Dashboard,
    FileVault,
    Invalid,
    Login,
    Onboarding,
    MembershipInformation,
    PersonalInformation,
    Register,
    UpdateCreditCard,
    Upgrade,
    UserSettings
} from 'pages';

import { AuEntry, AppEntry, AuthGuard, ActivationGuard } from './entries';

export const routes: RouterConfig = [
    {
        path: '',
        component: AuEntry,
        children: [
            {path: '', component: Login},
            {path: 'register', component: Register}
        ]
    },
    {
        path: 'activate/:id/:token',
        component: Activate,
        canActivate: [ActivationGuard]
    },
    {
        path: 'invalid',
        component: Invalid
    },
    {
        path: 'onboarding',
        component: Onboarding,
        canActivate: [AuthGuard],
        data: {name: 'Onboarding'}
    },
    {
        path: 'app',
        component: AppEntry,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                data: {name: 'Dashboard'}
            },
            {path: '', redirectTo: 'dashboard'},

            {
                path: 'settings',
                component: UserSettings,
                data: {name: 'My Settings'}
            },
            {
                path: 'files',
                component: FileVault,
                data: {name: 'My Files'}
            },
            {
                path: 'customer',
                component: Customer,
                data: {name: 'My Account'}
            },
            {
                path: 'customer/upgrade/:id',
                component: Upgrade,
                data: {
                    name: 'Upgrade Subscription',
                    parents: [{
                        name: 'My Subscription',
                        url: '/app/customer'
                    }]
                }
            },
            {
                path: 'customer/update/payment',
                component: UpdateCreditCard,
                data: {
                    name: 'Update Credit Card',
                    parents: [{
                        name: 'My Subscription',
                        url: '/app/customer'
                    }]
                }
            },
            {
                path: 'data/profile',
                children: [
                    {
                        path: 'personal-information',
                        component: PersonalInformation,
                        data: {
                            name: 'Personal Information'
                        }
                    }
                ]
            },
            {
                path: 'data/accounts',
                children: [
                    {
                        path: 'membership-information',
                        component: MembershipInformation,
                        data: {
                            name: 'Membership Information'
                        }
                    }
                ]
            }
        ]
    }
];
