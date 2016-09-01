import { IFormConfiguration, LsInputField, getValidator } from 'components';

export const MEMBERSHIPS_CONFIG: IFormConfiguration[] = [
    {
        config: {
            key: 'memberships',
            buttonLabel: 'Add New Membership',
            order: 1,
            fields: [
                {
                    config: {
                        key: 'organization_name',
                        label: 'Organization Name',
                        validators: [getValidator('required')]
                    },
                    type: LsInputField
                },
                {
                    config: {
                        key: 'id_number',
                        label: 'ID Number'
                    },
                    type: LsInputField
                },
                {
                    config: {
                        key: 'expiry_date',
                        label: 'Expiry Date'
                    },
                    type: LsInputField
                },
                {
                    config: {
                        key: 'notes',
                        label: 'Notes'
                    },
                    type: LsInputField
                }
            ]
        },
        type: null
    }
];
