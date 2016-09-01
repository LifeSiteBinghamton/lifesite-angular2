import { LsOldMajorCategoryModel } from 'data';
import { config as CONFIG } from './ls-data-config';

export const OLD_MAJOR_CATEGORIES: LsOldMajorCategoryModel[] = [
    {
        label: 'Profile',
        id: 'profile',
        icon: 'user',
        description: `Save all the important information about you, including identification documents and methods
            of contact. This can be used to help others locate your critical information in case of an emergency.`,
        categories: [
            {
                label: 'Personal Information',
                id: 'personal_information',
                tabs: [
                    CONFIG.profile,
                    CONFIG.describe_yourself,
                    CONFIG.phone_numbers,
                    CONFIG.email_addresses,
                    CONFIG.identification,
                    CONFIG.address,
                    CONFIG.religion
                ]
            },
            {
                label: 'Medical Information',
                id: 'medical_information',
                tabs: [
                    CONFIG.background,
                    CONFIG.illnesses,
                    CONFIG.immunizations,
                    CONFIG.prescriptions,
                    CONFIG.organ_donation,
                    CONFIG.doctors_specialists,
                    CONFIG.family_history
                ]
            }
        ]
    },
    {
        label: 'People & Pets',
        id: 'people_pets',
        icon: 'paw',
        description: `Store information about your friends, acquaintances, coworkers, family, and pets.`,
        categories: [
            {
                label: 'People',
                id: 'people',
                tabs: [
                    CONFIG.family,
                    CONFIG.friends,
                    CONFIG.business_associates,
                    CONFIG.other_relationships
                ]
            },
            {
                label: 'Pets',
                id: 'pets',
                tabs: [
                    CONFIG.pet_information
                ]
            }
        ]
    },
    {
        label: 'Accounts',
        id: 'accounts',
        icon: 'newspaper',
        description: `Manage all of your online and offline accounts. Collect and store information about your
            various memberships such as social media accounts and loyalty programs.`,
        categories: [
            {
                label: 'Memberships',
                id: 'membership_information',
                tabs: [
                    CONFIG.membership_information
                ]
            },
            {
                label: 'Online Accounts',
                id: 'online_accounts',
                tabs: [
                    CONFIG.online_accounts
                ]
            }
        ]
    },
    {
        label: 'Career & Education',
        id: 'career_education',
        icon: 'student',
        description: `Store and access your employment and education information, and keep important details related
            to your professional growth up to date.`,
        categories: [
            {
                label: 'Employment History',
                id: 'employment_history',
                tabs: [
                    CONFIG.employment_history
                ]
            },
            {
                label: 'Schools',
                id: 'schools',
                tabs: [
                    CONFIG.schools
                ]
            },
            {
                label: 'Military',
                id: 'military',
                tabs: [
                    CONFIG.military
                ]
            }
        ]
    },
    {
        label: 'Finances',
        id: 'finances',
        icon: 'dollar',
        description: `Organize your wealth and the accounts that connect you to your finances. You may monitor
            investments, keep employee benefits information, and track debt.`,
        categories: [
            {
                label: 'Income Information',
                id: 'income_information',
                tabs: [
                    CONFIG.employer_benefits,
                    CONFIG.government_benefits,
                    CONFIG.other_assets,
                    CONFIG.other_income,
                    CONFIG.debts_owed_to_me
                ]
            },
            {
                label: 'Investments & Banking',
                id: 'investments_banking',
                tabs: [
                    CONFIG.bank_accounts,
                    CONFIG.certificates_of_deposit,
                    CONFIG.money_market_funds,
                    CONFIG.banknotes_bills_and_bonds,
                    CONFIG.stocks,
                    CONFIG.other_investments
                ]
            },
            {
                label: 'Liabilities',
                id: 'liabilities',
                tabs: [
                    CONFIG.credit_cards,
                    CONFIG.bill_payments,
                    CONFIG.loans
                ]
            },
            {
                label: 'Business Interests',
                id: 'business_interests',
                tabs: [
                    CONFIG.business_interests
                ]
            },
            {
                label: 'Taxes',
                id: 'tax_information',
                tabs: [
                    CONFIG.tax_information
                ]
            }
        ]
    },
    {
        label: 'Property & Valuables',
        id: 'property_valuables',
        icon: 'home',
        description: `Maintain your home inventory system. Collect and organize details related to your physical
            valuables, retain records of your vehicles, and store records related to your home or real estate
            assets.`,
        categories: [
            {
                label: 'Vehicles',
                id: 'vehicles',
                tabs: [
                    CONFIG.vehicles
                ]
            },
            {
                label: 'Real Estate',
                id: 'real_estate',
                tabs: [
                    CONFIG.property_information,
                    CONFIG.property_services
                ]
            },
            {
                label: 'Safes & Safety Deposit Boxes',
                id: 'safes_safety_deposit_boxes',
                tabs: [
                    CONFIG.safes_safety_deposit_boxes
                ]
            },
            {
                label: 'Valuables',
                id: 'valuable_information',
                tabs: [
                    CONFIG.valuable_information
                ]
            }
        ]
    },
    {
        label: 'Insurance & Legal',
        id: 'insurance_legal',
        icon: 'legal',
        description: `Organize your current insurance policies and legal information such as executors, wills, or
            trusts. Fill out this section to protect them from unforeseen damage that may occur during a disaster.`,
        categories: [
            {
                label: 'Insurance Policies',
                id: 'insurance_policies',
                tabs: [
                    CONFIG.policy_information
                ]
            },
            {
                label: 'Legal Information',
                id: 'legal_information',
                tabs: [
                    CONFIG.will_codicil_trusts,
                    CONFIG.executors_guardians,
                    CONFIG.power_of_attorney,
                    CONFIG.living_wills,
                    CONFIG.legal_actions
                ]
            }
        ]
    },
    {
        label: 'Legacy',
        id: 'legacy',
        icon: 'leaf',
        description: `Define, organize, and convey all of your final wishes after you are gone. Use this section to
            outline your memorial wishes, funeral services, and whom to notify in the event of your passing.`,
        categories: [
            {
                label: 'Preparations',
                id: 'preparations',
                tabs: [
                    CONFIG.preplanning,
                    CONFIG.memorialization,
                    CONFIG.funeral_services,
                    CONFIG.service_arrangements,
                    CONFIG.people_to_notify
                ]
            },
            {
                label: 'Future Wishes',
                id: 'future_wishses',
                tabs: [
                    CONFIG.special_bequests,
                    CONFIG.legacy_communications
                ]
            }
        ]
    }
];
