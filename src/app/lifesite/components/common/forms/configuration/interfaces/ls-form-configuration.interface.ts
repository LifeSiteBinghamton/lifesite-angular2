import { IField } from './ls-field.interface';
import { IFieldOptions } from './ls-field-options.interface';

export interface IFormConfiguration {
    config: IFieldOptions<any>;
    type: {
        new (options: IFieldOptions<any>) : IField<any>
    };
}
