import { IField, IFormConfiguration } from 'components';

export interface ISchema {
    formConfig: IFormConfiguration[];
    fields: IField<any>[];
    arrayFormConfig?: IFormConfiguration;
}
