import { Component } from '@angular/core';

import { OLD_MAJOR_CATEGORIES as CONFIG } from 'core';
import { Page, LsTabs, LsTab, LsFileUpload } from 'components';
import { LsOldSubCategoryModel, LsOldMajorCategoryModel } from 'data';
import { Memberships } from 'schemas';

@Component({
    selector: 'membership-information',
    template: require('./membership-information.html'),
    directives: [Page, LsTabs, LsTab, LsFileUpload, Memberships]
})
export class MembershipInformation {
    private config: LsOldSubCategoryModel;

    constructor() {
        let majorCategory: LsOldMajorCategoryModel = CONFIG.find((category) => {
            return category.id === 'accounts';
        });

        this.config = majorCategory.categories.find((subcategory) => {
            return subcategory.id === 'membership_information';
        });
    }
}

