import { Component } from '@angular/core';

import { OLD_MAJOR_CATEGORIES as CONFIG } from 'core';
import { Page, LsTabs, LsTab, LsFileUpload } from 'components';
import { LsOldSubCategoryModel, LsOldMajorCategoryModel } from 'data';
import { PhoneNumbers, Profile } from 'schemas';

@Component({
    selector: 'personal-information',
    template: require('./personal-information.html'),
    directives: [Page, LsTabs, LsTab, LsFileUpload, Profile, PhoneNumbers]
})
export class PersonalInformation {
    private config: LsOldSubCategoryModel;

    constructor() {
        let majorCategory: LsOldMajorCategoryModel = CONFIG.find((category) => {
            return category.id === 'profile';
        });

        this.config = majorCategory.categories.find((subcategory) => {
            return subcategory.id === 'personal_information';
        });
    }
}
