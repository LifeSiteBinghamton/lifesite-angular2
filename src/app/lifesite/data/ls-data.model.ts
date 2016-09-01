/**
 * @interface
 * The model that represents the result from the server when requesting data for a form.
 */
export interface LsDataModel {
    category: string;
    json: {[key: string]: string};
    id: string;
    clientId: string;
}

/**
 * @interface
 * The model that represents a basic config for all data.
 */
interface BaseDataModel {
    label: string;
    id: string;
}

/**
 * @interface
 * The model that represents the over-arching category. These categories are seen on the side-nav and on the dashboard.
 */
export interface LsMajorCategoryModel extends BaseDataModel {
    categories: LsDataStructModel[];
}

/**
 * @interface
 * The model that represents the structure of categories and the forms within those categories.
 */
export interface LsDataStructModel extends BaseDataModel {
    newLabel?: string;
    newId?: string;
    fields: LsDataFieldModel[];
}

/**
 * @interface
 * The model that represents a single field in a form in a sub-category.
 */
export interface LsDataFieldModel extends BaseDataModel {}


// ------------------------------------------ LSV 2.3 CATEGORIES ---------------------------------------------
export interface LsOldMajorCategoryModel extends BaseDataModel {
    categories: LsOldSubCategoryModel[];
    description: string;
    icon: string;
}

export interface LsOldSubCategoryModel extends BaseDataModel {
    tabs: LsDataStructModel[];
}
