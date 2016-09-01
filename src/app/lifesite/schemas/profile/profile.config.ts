import { IFormConfiguration, LsInputField, LsSelectField, getValidator } from 'components';

export const PROFILE_CONFIG: IFormConfiguration[] = [
    {
        config: {
            key: 'first_name',
            label: 'First Name',
            order: 1,
            validators: [getValidator('required')]
        },
        type: LsInputField
    },
    {
        config: {
            key: 'middle_name',
            label: 'Middle Name',
            order: 2
        },
        type: LsInputField
    },
    {
        config: {
            key: 'last_name',
            label: 'Last Name',
            order: 3,
            validators: [getValidator('required')]
        },
        type: LsInputField
    },
    {
        config: {
            key: 'nickname',
            label: 'Nickname',
            order: 4
        },
        type: LsInputField
    },
    {
        config: {
            key: 'marital_status',
            label: 'Marital Status',
            order: 5,
            elements: [
                {display: '--Select Marital Status--', value: ''},
                {display: 'Single', value: 'single'},
                {display: 'Married', value: 'married'},
                {display: 'Divorced', value: 'divorced'},
                {display: 'Widowed', value: 'widowed'},
                {display: 'Common Law', value: 'common_law'},
                {display: 'Domestic Partner', value: 'domestic_partner'},
                {display: 'Separated', value: 'separated'},
                {display: 'Other', value: 'other'}
            ]
        },
        type: LsSelectField
    },
    {
        config: {
            key: 'gender',
            label: 'Gender',
            order: 6,
            elements: [
                {display: 'Male', value: 'male'},
                {display: 'Female', value: 'female'}
            ]
        },
        type: LsSelectField
    },
    {
        config: {
            key: 'birth_date',
            label: 'Date of Birth (mm/dd/yyyy)',
            order: 7
        },
        type: LsInputField
    },
    {
        config: {
            key: 'birth_place',
            label: 'Place of Birth',
            order: 8
        },
        type: LsInputField
    }
];
