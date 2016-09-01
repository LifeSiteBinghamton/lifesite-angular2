import { IFormConfiguration, LsInputField } from 'components';

export const PHONE_NUMBERS_CONFIG: IFormConfiguration[] = [
    {
        config: {
            key: 'phone_numbers',
            buttonLabel: 'Add New Phone Number',
            order: 1,
            fields: [
                {
                    config: {
                        key: 'phone_number',
                        label: 'Phone Number'
                    },
                    type: LsInputField
                },
                {
                    config: {
                        key: 'type',
                        label: 'Type'
                    },
                    type: LsInputField
                }
            ]
        },
        type: null
    }
];
