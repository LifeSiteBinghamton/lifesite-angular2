import { IFormConfiguration } from './ls-form-configuration.interface';
import { IValidator } from '../../validation';

export interface IFieldOptions<T> {
    value?: T;
    key?: string;
    label?: string;
    order?: number;
    validators?: IValidator[];

    // Field-specific options
    // --------------------------------------------------------------------------------------------
    // Select boxes, radios
    elements?: {display: string, value: string}[];

    // Input box type
    type?: string;

    // Form array
    fields?: IFormConfiguration[];
    buttonLabel?: string;
}
