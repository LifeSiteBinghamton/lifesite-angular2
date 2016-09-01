import { IField, IFieldOptions, IFormConfiguration } from 'components';
import { LsDataModel } from 'data';
import { DataService } from 'utility';
import { ISchema } from './schema.interface';

export class Schema implements ISchema {
    formConfig: IFormConfiguration[];
    fields: IField<any>[];
    arrayFormConfig: IFormConfiguration;

    protected isLoading: boolean = false;

    constructor(configuration: IFormConfiguration[], protected dataService: DataService) {
        this.formConfig = configuration;
    }

    protected ngOnInit(category) {
        this.isLoading = true;
        this.dataService
            .getData({where: {category: category}})
            .finally(() => this.isLoading = false)
            .subscribe((data: LsDataModel) => {
                this.configureForm(data);
            }, (error) => {
                // todo - error
            });
    }

    protected onSubmit(form: {value: any, id: string}) {
        this.isLoading = true;
        this.dataService
            .setData(form.id, form.value)
            .finally(() => this.isLoading = false)
            .subscribe(() => {
                // todo - do something?
            }, (error) => {
                // todo - error
            });
    }

    private configureForm(data: LsDataModel) {
        /**
         * Extends our configuration object with {@link IFieldOptions#value} if a value exists. The value is retrieved
         * from the server.
         *
         * @param {string} key The field-key we should be looking for in the response json. All data saved on the server
         *                     is in the form of `{field_key: user_entered_value}`.
         *
         * @returns {{value: string}|{}} An empty object if there is no data for the current field, or an object with
         *                               the value from the server for the given `key`.
         */
        let getData = function (key: string) {
            return data.json ? {value: data.json[key]} : {};
        };

        // Get all fields that ARE NOT `lsArrayForm`
        let fieldsConfig: IFormConfiguration[] = this.formConfig.filter((fieldsConfiguration: IFormConfiguration) => {
            return fieldsConfiguration.type !== null;
        });

        // Set the form's fields up
        this.fields = fieldsConfig.map((fieldConfiguration) => {
            let config: IFieldOptions<any> = fieldConfiguration.config;
            let iField = fieldConfiguration.type;
            config = Object.assign(config, getData(config.key));

            return new iField(config);
        });

        // Get any `lsArrayForm` fields
        let arrayFormConfig: IFormConfiguration = this.formConfig.find((fieldsConfiguration) => {
            return fieldsConfiguration.type === null;
        });

        if (arrayFormConfig) {
            let config: IFieldOptions<any> = arrayFormConfig.config;
            // Extend our configuration with any values from the server.
            arrayFormConfig.config = Object.assign(config, getData(config.key));
            this.arrayFormConfig = arrayFormConfig;
        }
    }
}
