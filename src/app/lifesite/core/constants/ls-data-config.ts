import { LsMajorCategoryModel, LsDataStructModel } from 'data';

export const config: any = {
    online_accounts: {
        label: 'Online Accounts', id: 'online_accounts',
        fields: [
            {label: 'Account', id: 'Account'},
            {label: 'Website URL', id: 'Website_URL'},
            {label: 'Associated Email Address', id: 'Email'},
            {label: 'Username', id: 'Username'},
            {label: 'Password', id: 'Password'},
            {label: 'Delete Account On Death?', id: 'Delete_Account_On_Death'},
            {label: 'Notes', id: 'Notes'}]
    },
    membership_information: {
        label: 'Membership Information',
        id: 'membership_information',
        fields: [
            {label: 'Organization Name', id: 'organization_name'},
            {label: 'ID Number', id: 'id_number'},
            {label: 'Expiry Date', id: 'expiry_date'},
            {label: 'Notes', id: 'notes'}]
    },
    business_interests: {
        label: 'Business Interests', id: 'business_interests',
        newLabel: 'Business Relationships', newId: 'business_relationships',
        fields: [
            {label: 'Business Name', id: 'Business_Name'},
            {label: 'Business Contact Information', id: 'Business_Contact_Information'},
            {label: 'Business Type', id: 'Business_Type'},
            {label: 'Key Employees', id: 'Key_Employees'},
            {label: 'Business Owner(s)', id: 'Business_Owners'},
            {label: 'Business Owner(s) Contact Information', id: 'Business_Owners_Contact_Information'},
            {label: 'Legal Advisor', id: 'Legal_Advisor'},
            {label: 'Legal Advisor Contact Information', id: 'Legal_Advisor_Contact_Information'},
            {label: 'Accountant', id: 'Accountant'},
            {label: 'Accountant Contact Information', id: 'Accountant_Contact_Information'},
            {label: 'Location Of Business Interest Documents', id: 'Documentation_Location'},
            {label: 'Notes', id: 'Notes'}]
    },
    military: {
        label: 'Military', id: 'military',
        fields: [
            {label: 'Branch Of Service', id: 'Branch_Of_Service'},
            {label: 'Highest Rank', id: 'Highest_Ranking'},
            {label: 'Service Serial Number', id: 'Service_Serial_Number'},
            {label: 'Place Of Entering Service', id: 'Place_Of_Entering_Service'},
            {label: 'Date Of Entering Service', id: 'Date_Of_Entering_Service'},
            {label: 'Military Honors & Awards', id: 'Military_Honors'},
            {label: 'Details Of Service', id: 'Details_Of_Service'},
            {label: 'Enter Military Discharge Details?', id: 'Enter_Discharge_Details'},
            {label: 'Type Of Discharge', id: 'Type_Of_Discharge'},
            {label: 'Place Of Discharge', id: 'Place_Of_Discharge'},
            {label: 'Date Of Discharge', id: 'Date_Of_Discharge'},
            {label: 'Location Of Discharge Papers', id: 'Location_Of_Discharge_Papers'}]
    },
    employment_history: {
        label: 'Employment History', id: 'employment_history',
        newLabel: 'Career', newId: 'career',
        fields: [
            {label: 'Employer', id: 'employer'},
            {label: 'Employer Contact Information', id: 'contact_information'},
            {label: 'Last Position Held', id: 'last_position_held'},
            {label: 'Job Description', id: 'job_description'},
            {label: 'Responsibilities', id: 'job_responsibilities'},
            {label: 'Start Date', id: 'start_date'},
            {label: 'End Date', id: 'end_date'},
            {label: 'Notes', id: 'notes'}]
    },
    schools: {
        label: 'Schools', id: 'schools', newLabel: 'Education', newId: 'education',
        fields: [
            {label: 'School', id: 'school'},
            {label: 'Year Started', id: 'year_started'},
            {label: 'Graduation Year', id: 'graduation_year'},
            {label: 'Degree', id: 'degree'},
            {label: 'Field Of Study', id: 'field_of_study'},
            {label: 'Grade', id: 'grade'},
            {label: 'Activities and Societies', id: 'activities_and_societies'},
            {label: 'Additional Information', id: 'additional_information'}]
    },
    loans: {
        label: 'Loans', id: 'loans',
        fields: [
            {label: 'Lender\'s Name', id: 'Lender_Name'},
            {label: 'Loan Type', id: 'Loan_Type'},
            {label: 'Lender\'s Contact Information', id: 'Lender_Contact_Information'},
            {label: 'Location Of Loan Documents', id: 'Loan_Document_Location'},
            {label: 'Loan Payment Amount', id: 'Loan_Amount'},
            {label: 'Frequency Paid', id: 'Frequency_Paid'},
            {label: 'Last Paid Date', id: 'Paid_Date'},
            {label: 'Loan Maturity Date', id: 'Loan_Maturity_Date'},
            {label: 'Notes', id: 'Loan_Notes'}]
    },
    bill_payments: {
        label: 'Bill Payments', id: 'bill_payments',
        fields: [
            {label: 'Payee', id: 'Payee'},
            {label: 'Payee Contact Information', id: 'Payee_Contact_Information'},
            {label: 'Purpose', id: 'Purpose'},
            {label: 'Account Number Debited', id: 'Account_Number_Debited'},
            {label: 'Credit Account Charged', id: 'Credit_Account_Charged'},
            {label: 'Bill Amount', id: 'Bill_Amount'},
            {label: 'Frequency Paid', id: 'Frequency_Paid'},
            {label: 'Last Paid Date', id: 'Paid_Date'}]
    },
    credit_cards: {
        label: 'Credit Cards', id: 'credit_cards',
        fields: [
            {label: 'Card Issuer Name', id: 'Card_Issuer_Name'},
            {label: 'Card Issuer Contact Information', id: 'Card_Issuer_Contact_Information'},
            {label: 'Name On Card / Account', id: 'Name_On_Card'},
            {label: 'Card / Account Number', id: 'Card_Number'},
            {label: 'Card Verification Value (CVV)', id: 'Card_Verification_Value'},
            {label: 'Card Expiration Date (mm/yy)', id: 'Card_Expiration_Date'},
            {label: 'Co-Owner(s)', id: 'Coowners'},
            {label: 'Co-Owner(s) Contact Information', id: 'Coowners_Contact_Information'},
            {label: 'Authorized Signers', id: 'Authorized_Signers'},
            {label: 'Credit Insurance Information', id: 'Credit_Insurance_Info'},
            {label: 'Card Location', id: 'Card_Location'},
            {label: 'Location Of Credit Card Statements', id: 'Card_Statements_Location'}]
    },
    tax_information: {
        label: 'Tax Information', id: 'tax_information', newLabel: 'Taxes', newId: 'taxes',
        fields: [
            {label: 'Tax Year', id: 'Tax_Year'},
            {label: 'Tax ID(s)', id: 'Tax_Id'},
            {label: 'Location Of Tax Returns', id: 'Tax_Return_Location'},
            {label: 'Location Of IRS / State Tax Notices', id: 'Tax_Notice_Location'},
            {label: 'Tax Preparer Name & Contact Information', id: 'Tax_Preparer_Information'}]
    },
    other_investments: {
        label: 'Other Investments', id: 'other_investments',
        fields: [
            {label: 'Description', id: 'Description'},
            {label: 'Date Investment Was Made', id: 'Date_Made'},
            {label: 'Amount', id: 'Amount'},
            {label: 'Current Value', id: 'Current_Value'},
            {label: 'Location Of Investment Documents', id: 'Location'},
            {label: 'Notes', id: 'Notes'}]
    },
    government_benefits: {
        label: 'Government Benefits', id: 'government_benefits',
        fields: [
            {label: 'Individual', id: 'Individual'},
            {label: 'Benefit Type', id: 'Benefit_Type'},
            {label: 'Benefit Description', id: 'Benefit_Description'},
            {label: 'Account Name', id: 'Account_Name'},
            {label: 'Benefit Recipient(s)', id: 'Benefit_Recipients'},
            {label: 'Social Security Number (xxx-xx-xxxx)', id: 'SSN'},
            {label: 'Account Status', id: 'Account_Status'},
            {label: 'Location Of Government Benefit Statements', id: 'Location_Of_Statements'}]
    },
    other_assets: {
        label: 'Other Assets', id: 'other_assets',
        fields: [
            {label: 'Description Of Asset', id: 'Description'},
            {label: 'Owner(s)', id: 'Owners'},
            {label: 'Owner(s) Contact Information', id: 'Owners_Contact_Information'},
            {label: 'Location Of Documents', id: 'Location'}]
    },
    other_income: {
        label: 'Other Income', id: 'other_income',
        fields: [
            {label: 'Income Source', id: 'Income_Source'},
            {label: 'Income Source Contact Information', id: 'Source_Contact_Info'},
            {label: 'Description Of Income', id: 'Description'},
            {label: 'Location Of Income Documents', id: 'Document_Location'}]
    },
    debts_owed_to_me: {
        label: 'Debts Owed To Me', id: 'debts_owed_to_me',
        fields: [
            {label: 'Source', id: 'Source'},
            {label: 'Source Contact Information', id: 'Source_Contact_Information'},
            {label: 'Terms Of Debt', id: 'Terms_Of_Debt'},
            {label: 'Amount Owed', id: 'Amount'},
            {label: 'Location Of Debt Documents', id: 'Location_Of_Debt_Documents'}]
    },
    bank_accounts: {
        label: 'Bank Accounts', id: 'bank_accounts',
        fields: [
            {label: 'Account Type', id: 'Account_Type'},
            {label: 'Account Number', id: 'Account_Number'},
            {label: 'Value', id: 'Account_Value'},
            {label: 'Description', id: 'Account_Description'},
            {label: 'Authorized Signers', id: 'Authorized_Signers'},
            {label: 'Financial Institution', id: 'Financial_Institution'},
            {label: 'Financial Institution Contact Information', id: 'Financial_Institution_Contact_Information'},
            {label: 'Location Of Statements & Account Information', id: 'Account_Information_Location'},
            {label: 'Notes', id: 'Notes'}]
    },
    certificates_of_deposit: {
        label: 'Certificates of Deposit',
        id: 'certificates_of_deposit',
        fields: [
            {label: 'Issuer Name', id: 'Issuer_Name'},
            {label: 'Issuer Contact Information', id: 'Issuer_Contact_Information'},
            {label: 'Certificate Number', id: 'Certificate_Number'},
            {label: 'Amount Invested', id: 'Amount_Invested'},
            {label: 'Purchase Date', id: 'Purchase_Date'},
            {label: 'Maturity Date', id: 'Maturity_Date'},
            {label: 'Interest Rate', id: 'Interest_Rate'},
            {label: 'Owner(s)', id: 'Owners'},
            {label: 'Owner(s) Contact Information', id: 'Owners_Contact_Information'},
            {label: 'Notes', id: 'Notes'}]
    },
    money_market_funds: {
        label: 'Money Market Funds', id: 'money_market_funds',
        fields: [
            {label: 'Type Of Fund', id: 'Fund_Type'},
            {label: 'Issuer Name', id: 'Issuer_Name'},
            {label: 'Issuer Contact Information', id: 'Issuer_Contact_Information'},
            {label: 'Account Number', id: 'Account_Number'},
            {label: 'Fund Value', id: 'Fund_Value'},
            {label: 'Owner(s)', id: 'Owner'},
            {label: 'Owner(s) Contact Information', id: 'Owner_Contact_Information'},
            {label: 'Location Of Funds', id: 'Location'},
            {label: 'Notes', id: 'Notes'}]
    },
    banknotes_bills_and_bonds: {
        label: 'Banknotes, Bills, and Bonds',
        id: 'banknotes_bills_and_bonds',
        fields: [
            {label: 'Note Type', id: 'Note_Type'},
            {label: 'Issuer', id: 'Issuer'},
            {label: 'Series Number', id: 'Series_Number'},
            {label: 'Face Amount', id: 'Face_Amount'},
            {label: 'Taxable?', id: 'Taxable'},
            {label: 'Purchase Price', id: 'Purchase_Price'},
            {label: 'Purchase Date', id: 'Purchase_Date'},
            {label: 'Maturity Date', id: 'Maturity_Date'},
            {label: 'Interest Rate', id: 'Interest_Rate'},
            {label: 'Owner(s)', id: 'Owner'},
            {label: 'Owner(s) Contact Information', id: 'Owner_Contact_Information'},
            {label: 'Location Of Note, Bill, Or Bond', id: 'Note_Location'},
            {label: 'Notes', id: 'Notes'}]
    },
    stocks: {
        label: 'Stocks', id: 'stocks',
        fields: [
            {label: 'Company', id: 'Company'},
            {label: 'Symbol', id: 'Company_Symbol'},
            {label: 'Company Contact Information', id: 'Company_Contact_Information'},
            {label: 'Type', id: 'Type'},
            {label: 'Option Price Per Share', id: 'Share_Price'},
            {label: 'Number Of Shares', id: 'Share_Number'},
            {label: 'Original Price', id: 'Original_Price'},
            {label: 'Purchase Date', id: 'Purchase_Date'},
            {label: 'Option Expiry Date', id: 'Expiry_Date'},
            {label: 'Current Value', id: 'Current_Value'},
            {label: 'Owner(s)', id: 'Owner'},
            {label: 'Owner(s) Contact Information', id: 'Owner_Contact_Information'},
            {label: 'Location Of Stocks Or Certificates', id: 'Location'},
            {label: 'Notes', id: 'Notes'}]
    },
    employer_benefits: {
        label: 'Employer Benefits', id: 'employer_benefits',
        fields: [
            {label: 'Benefit Type', id: 'Benefit_Type'},
            {label: 'Plan Description', id: 'Plan_Description'},
            {label: 'Employer', id: 'Employer'},
            {label: 'Employer Contact Information', id: 'Employer_Contact_Information'},
            {label: 'Financial Institution', id: 'Financial_Institution'},
            {label: 'Financial Institution Contact Information', id: 'Financial_Institution_Contact_Information'},
            {label: 'Plan Status', id: 'Plan_Status'},
            {label: 'Account Number', id: 'Account_Number'},
            {label: 'Location Of Plans And Accounts', id: 'Location_Of_Account'}]
    },
    power_of_attorney: {
        label: 'Power of Attorney', id: 'power_of_attorney',
        fields: [{
            label: 'Title / Description Of Power Of Attorney Document',
            id: 'description'
        },
            {label: 'Health Care Power of Attorney?', id: 'Health_Care_Poa'},
            {label: 'Date Of Power Of Attorney', id: 'poDate'},
            {label: 'Power Of Attorney Relationship & Contact Information', id: 'poContactInfo'},
            {label: 'Location Of Power Of Attorney Document(s)', id: 'location'},
            {label: 'Notes', id: 'notes'}]
    },
    executors_guardians: {
        label: 'Executors & Guardians', id: 'executors_guardians',
        fields: [
            {label: 'Name', id: 'Name'},
            {label: 'Title', id: 'Type'},
            {label: 'Emergency Contact', id: 'Emergency_Contact'},
            {label: 'Contact Information', id: 'Contact_Information'},
            {label: 'Notes', id: 'Notes'}]
    },
    legal_actions: {
        label: 'Legal Actions', id: 'legal_actions',
        fields: [
            {label: 'Case Information', id: 'Case_Information'},
            {label: 'Attorney Name & Contact Information', id: 'Attorney_Contact_Information'},
            {label: 'Location of Legal Action Documents', id: 'Location'},
            {label: 'Description of Potential Legal Claims', id: 'Description'}]
    },
    policy_information: {
        label: 'Policy Information', id: 'policy_information',
        newLabel: 'Insurance Policies', newId: 'insurance_policies',
        fields: [
            {label: 'Insurance Type', id: 'insurance_type'},
            {label: 'Description of Insurance', id: 'insurance_other_description'},
            {label: 'Policy Owner', id: 'policy_owner'},
            {label: 'Agent Name', id: 'agent_name'},
            {label: 'Company Name', id: 'company_name'},
            {label: 'Account/Policy Number', id: 'account'},
            {label: 'Insured Name(s)', id: 'insureds'},
            {label: 'Insurance Amount', id: 'face_amount'},
            {label: 'Cash Value', id: 'cash_value'},
            {label: 'Cash Value Last Date Entered', id: 'cash_last_date_entered'},
            {label: 'Premium Amount', id: 'premium_amount'},
            {label: 'Frequency Paid', id: 'Frequency_Paid'},
            {label: 'Last Paid Date', id: 'Paid_Date'},
            {label: 'Policy Location', id: 'policy_location'},
            {label: 'Additional Policy Information', id: 'policy_information'}]
    },
    living_wills: {
        label: 'Living Wills', id: 'living_wills',
        fields: [{
            label: 'Document Title & Description',
            id: 'Document_Description'
        },
            {label: 'Date Prepared', id: 'Date'},
            {label: 'Effective Date', id: 'Effective_Date'},
            {label: 'Agent Name', id: 'Agent_Name'},
            {label: 'Agent Contact Information', id: 'Agent_Contact_Information'},
            {label: 'Preparer', id: 'preparer'},
            {label: 'Preparer Contact Information', id: 'Preparer_Contact_Information'},
            {label: 'Location Of Living Will Document(s)', id: 'Location'},
            {label: 'Notes', id: 'Notes'}]
    },
    will_codicil_trusts: {
        label: 'Will, Codicil, Trusts',
        id: 'will_codicil_trusts',
        fields: [
            {label: 'Name Of Document', id: 'typeOfWill'},
            {label: 'Date', id: 'dateOfWill'},
            {label: 'Preparer', id: 'preparer'},
            {label: 'Preparer Contact Information', id: 'preparerContactInfo'},
            {label: 'Location Of Will / Codicil / Trust Documents', id: 'willLocation'},
            {label: 'Notes', id: 'notes'}]
    },
    people_to_notify: {
        label: 'People To Notify', id: 'people_to_notify',
        fields: [
            {label: 'Name', id: 'name'},
            {label: 'Relationship', id: 'relationship'},
            {label: 'Contact Information', id: 'contact_information'}]
    },
    funeral_services: {
        label: 'Funeral Services', id: 'funeral_services',
        fields: [
            {label: undefined, id: 'service_options'},
            {label: 'Additional Description Of Services', id: 'service_description'},
            {label: 'Service Location(s)', id: 'service_location'},
            {label: 'Service Details', id: 'service_details'},
            {label: 'Reception Location', id: 'reception_location'},
            {label: 'Reception Contact Information', id: 'reception_contact_information'},
            {label: 'Reception Details', id: 'reception_details'}]
    },
    memorialization: {
        label: 'Memorialization',
        id: 'memorialization',
        fields: [
            {label: 'Preferred Memorial Park / Cemetery', id: 'cemetery'},
            {label: 'Memorial Park / Cemetery Contact Information', id: 'cemetery_contact_information'},
            {label: 'I Own Or Prefer', id: 'cemetery_i_own_or_prefer'},
            {label: 'Memorial Description', id: 'memorial_description'},
            {label: 'Location Of Memorial Deed', id: 'memorial_deedlocation'},
            {label: 'Memorial Inscriptions & Emblems', id: 'memorial_inscriptions'},
            {label: 'Additional Memorial Details', id: 'memorial_details'}]
    },
    preplanning: {
        label: 'Pre-Planning', id: 'preplanning',
        fields: [{
            label: 'Were Arrangements Already Made?',
            id: 'arrangements_made'
        },
            {label: 'Funeral Home', id: 'funeral_home'},
            {label: 'Funeral Home Contact Information', id: 'funeral_home_contact_information'},
            {label: 'Location Of Important Funeral Documents', id: 'funeralhome_documents'},
            {label: 'Details Of Arrangements', id: 'details'},
            {label: 'I Would Like My Body:', id: 'body_choice'},
            {label: 'Additional Instructions', id: 'additional_information'}]
    },
    legacy_communications: {
        label: 'Legacy Communications', id: 'legacy_communications',
        fields: [
            {label: 'Recipient', id: 'recipient'},
            {label: 'Recipient Contact Information', id: 'recipient_contact_information'},
            {label: 'When To Send', id: 'when_to_send'},
            {label: 'Special Instructions', id: 'special_instructions'},
            {label: 'Message', id: 'message'}]
    },
    special_bequests: {
        label: 'Special Bequests', id: 'special_bequests',
        fields: [
            {label: 'Item', id: 'item'},
            {label: 'Beneficiary', id: 'beneficiary'},
            {label: 'Beneficiary Contact Information', id: 'beneficiary_contact_information'}]
    },
    service_arrangements: {
        label: 'Service Arrangements',
        id: 'service_arrangements',
        fields: [
            {label: 'Type Of Casket', id: 'casket_type'},
            {label: 'Viewing Type', id: 'viewing_type'},
            {label: 'Participating Organization(s) & Contact Information', id: 'organization_details'},
            {label: 'Personal Reflections - To My Family & Friends', id: 'personal_reflections'},
            {label: 'Celebrant / Clergy Information', id: 'clergy_information'},
            {label: 'Religious Passages and Religion Information', id: 'religious_passages'},
            {label: 'Clothing & Personal Accessories', id: 'clothing_information'},
            {label: 'Floral Preferences', id: 'floral_preferences'},
            {label: 'Musical Selections', id: 'musical_selections'},
            {label: 'Eulogy Notations', id: 'eulogies'},
            {label: 'Newspaper & Website Obituary Notices', id: 'obituary'},
            {label: 'Pallbearer Details & Contact Information', id: 'pallbearer'}]
    },
    family: {
        label: 'Family', id: 'family',
        fields: [
            {label: 'Family Member\'s Name', id: 'Name'},
            {label: 'Relationship', id: 'Relationship'},
            {label: 'Description of Other', id: 'Relationship_Other'},
            {label: 'Date Of Birth (mm/dd/yyyy)', id: 'Date_Of_Birth'},
            {label: 'Emergency Contact?', id: 'Emergency_Contact'},
            {label: 'Address', id: 'Address'},
            {label: 'Phone Number', id: 'Phone'},
            {label: 'Email Address', id: 'Email'},
            {label: 'Notes', id: 'Notes'},
            {label: 'Enter Identification Information?', id: 'Enter_Identification_Information'},
            {label: undefined, id: 'driver_license_state'},
            {label: 'Driver\'s License Number', id: 'driver_license_number'},
            {label: 'Driver\'s License Expiration', id: 'driver_license_expiration'},
            {label: 'Social Security Number (xxx-xx-xxxx)', id: 'ssn'},
            {label: 'Citizenship', id: 'citizenship'},
            {label: 'Passport ID or Card Number', id: 'passport_number'},
            {label: 'Passport Expiration', id: 'passport_expiration'},
            {label: 'Known Traveler Number', id: 'known_traveler_number'},
            {label: 'Identification Notes', id: 'identification_notes'},
            {label: 'Enter Medical Information?', id: 'Enter_Medical_Information'},
            {label: 'Medical Card', id: 'medical_card'},
            {label: 'Blood Type', id: 'blood_type'},
            {label: 'Date of Last Physical', id: 'date_last_physical'},
            {label: 'Date of Next Physical', id: 'date_next_physical'},
            {label: 'Allergies', id: 'allergies'},
            {label: 'Previous Surgeries', id: 'surgeries'},
            {label: 'Emergency Medical Information', id: 'emergency_medical_info'}]
    },
    pet_information: {
        label: 'Pet Information', id: 'pet_information', newLabel: 'Pets', newId: 'pets',
        fields: [
            {label: undefined, id: 'pet_images'},
            {label: 'Pet\'s Name', id: 'Name'},
            {label: 'Type Of Pet', id: 'Type'},
            {label: 'Breed / Species', id: 'Breed'},
            {label: 'Is Pet Spayed or Neutered?', id: 'Spayed_Neutered'},
            {label: 'Birthday (mm/dd/yyyy)', id: 'Birthday'},
            {label: 'Microchip ID Number', id: 'Microchip'},
            {label: 'Dietary Information', id: 'Dietary_Information'},
            {label: 'Medical / Vaccination Information', id: 'Medical_Information'},
            {label: 'Vet Information', id: 'Vet_Information'},
            {label: 'Groomer Information', id: 'Groomer_Information'},
            {label: 'Additional Notes', id: 'Notes'}]
    },
    friends: {
        label: 'Friends', id: 'friends',
        fields: [
            {label: 'Friend\'s Name', id: 'Name'},
            {label: 'Date Of Birth (mm/dd/yyyy)', id: 'Date_Of_Birth'},
            {label: 'Emergency Contact?', id: 'Emergency_Contact'},
            {label: 'Address', id: 'Address'},
            {label: 'Phone Number', id: 'Phone'},
            {label: 'Email Address', id: 'Email'},
            {label: 'Notes', id: 'Notes'}]
    },
    business_associates: {
        label: 'Business Associates',
        id: 'business_associates',
        fields: [
            {label: 'Business Associate\'s Name', id: 'Name'},
            {label: 'Date Of Birth (mm/dd/yyyy)', id: 'Date_Of_Birth'},
            {label: 'Emergency Contact?', id: 'Emergency_Contact'},
            {label: 'Address', id: 'Address'},
            {label: 'Phone Number', id: 'Phone'},
            {label: 'Email Address', id: 'Email'},
            {label: 'Notes', id: 'Notes'}]
    },
    other_relationships: {
        label: 'Other Relationships', id: 'other_relationships',
        fields: [
            {label: 'Name', id: 'Name'},
            {label: 'Date Of Birth (mm/dd/yyyy)', id: 'Date_Of_Birth'},
            {label: 'Emergency Contact?', id: 'Emergency_Contact'},
            {label: 'Address', id: 'Address'},
            {label: 'Phone Number', id: 'Phone'},
            {label: 'Email Address', id: 'Email'},
            {label: 'Notes', id: 'Notes'}]
    },
    identification: {
        label: 'Identification', id: 'identification',
        newLabel: 'Identification Documents', newId: 'identification_documents',
        fields: [
            {label: undefined, id: 'driver_license_state'},
            {label: 'Driver\'s License Number', id: 'driver_license_number'},
            {label: 'Driver\'s License Expiration', id: 'driver_license_expiration'},
            {label: 'Social Security Number (xxx-xx-xxxx)', id: 'ssn'},
            {label: 'Citizenship', id: 'citizenship'},
            {label: 'Passport ID or Card Number', id: 'passport_number'},
            {label: 'Passport Expiration', id: 'passport_expiration'},
            {label: 'Known Traveler Number', id: 'known_traveler_number'},
            {label: 'Notes', id: 'notes'}]
    },
    doctors_specialists: {
        label: 'Doctors & Specialists', id: 'doctors_specialists',
        fields: [
            {label: 'Person', id: 'person'},
            {label: 'Name', id: 'name'},
            {label: 'Type', id: 'type'},
            {label: 'Specialty', id: 'specialty'},
            {label: 'Description of Other', id: 'type_other'},
            {label: 'Location', id: 'location'},
            {label: 'Phone Number', id: 'phone_number'},
            {label: 'Email Address', id: 'email_address'}]
    },
    organ_donation: {
        label: 'Organ Donation', id: 'organ_donation',
        fields: [
            {label: 'Donate', id: 'donation_option'},
            {label: 'Organs To Donate', id: 'organs_to_donate'},
            {label: 'Location Of Donor Card', id: 'donation_card'},
            {label: 'Institution To Donate Body To', id: 'donation_institution'}]
    },
    prescriptions: {
        label: 'Prescriptions', id: 'prescriptions',
        fields: [
            {label: 'Person', id: 'person'},
            {label: 'Medication', id: 'medication'},
            {label: 'Dosage', id: 'dosage'},
            {label: 'Prescribed by Doctor', id: 'prescribingDoctor'},
            {label: 'Prescription Refill Date', id: 'prescription_refill_date'},
            {label: 'Prescription Filled At Location', id: 'prescriptionFilledAt'}]
    },
    immunizations: {
        label: 'Immunizations', id: 'immunizations',
        fields: [
            {label: 'Person', id: 'person'},
            {label: 'Vaccine', id: 'vaccine_name'},
            {label: 'Description of Other', id: 'other_description'},
            {label: 'Additional Details', id: 'vaccine_details'},
            {label: 'Date Given', id: 'vaccine_date'},
            {label: 'Next Vaccination Date', id: 'vaccine_date_next'}]
    },
    profile: {
        label: 'Profile', id: 'profile', newLabel: 'Basic Information', newId: 'basic_information',
        fields: [
            {label: 'First Name', id: 'first_name'},
            {label: 'Middle Name', id: 'middle_name'},
            {label: 'Last Name', id: 'last_name'},
            {label: 'Nickname', id: 'nickname'},
            {label: 'Marital Status', id: 'marital_status'},
            {label: 'Gender', id: 'gender'},
            {label: 'Date Of Birth (mm/dd/yyyy)', id: 'birth_date'},
            {label: 'Place Of Birth', id: 'birth_place'}]
    },
    describe_yourself: {
        label: 'Describe Yourself', id: 'describe_yourself',
        newLabel: 'Physical Traits', newId: 'physical_traits',
        fields: [
            {label: 'Height', id: 'height'},
            {label: 'Weight', id: 'weight'},
            {label: 'Hair Color', id: 'hair_color'},
            {label: 'Description of Other', id: 'hair_color_other'},
            {label: 'Eye Color', id: 'eye_color'},
            {label: 'Description of Other', id: 'eye_color_other'},
            {label: 'Ethnicity', id: 'ethnicity'},
            {label: 'Description of Other', id: 'ethnicity_other'},
            {label: 'Identifying Marks', id: 'identifying_markings'}]
    },
    phone_numbers: {
        label: 'Phone Numbers', id: 'phone_numbers',
        fields: [
            {label: 'Phone Number', id: 'number'},
            {label: 'Type', id: 'type'}]
    },
    email_addresses: {
        label: 'Email Addresses', id: 'email_addresses',
        fields: [
            {label: 'Email Address', id: 'email'},
            {label: 'Type', id: 'type'}]
    },
    family_history: {
        label: 'Family History', id: 'family_history',
        fields: [
            {label: 'Person', id: 'person'},
            {label: 'Relationship', id: 'relationship'},
            {label: 'Conditions', id: 'conditions'}]
    },
    address: {
        label: 'Address', id: 'address',
        fields: [
            {label: 'Address 1', id: 'address_address1'},
            {label: 'Address 2', id: 'address_address2'},
            {label: 'Address 3', id: 'address_address3'},
            {label: 'City', id: 'address_city'},
            {label: undefined, id: 'address_country'},
            {label: undefined, id: 'address_state'},
            {label: undefined, id: 'address_province_canada'},
            {label: 'Zip Code', id: 'address_zip'},
            {label: 'Additional Information', id: 'address_additional_info'}]
    },
    religion: {
        label: 'Religion', id: 'religion',
        fields: [
            {label: 'Religion / Belief', id: 'religion'},
            {label: 'Place of Worship', id: 'worship_place'},
            {label: 'Contact Information', id: 'worship_contact'}]
    },
    illnesses: {
        label: 'Illnesses', id: 'illnesses',
        fields: [
            {label: 'Person', id: 'person'},
            {label: 'Illness', id: 'illness'},
            {label: 'Diagnosed On', id: 'diagnosed_on'},
            {label: 'Treated By', id: 'treated_by'}]
    },
    background: {
        label: 'Background', id: 'background',
        fields: [
            {label: 'Medical Card', id: 'medical_card'},
            {label: 'Blood Type', id: 'blood_type'},
            {label: 'Date of Last Physical', id: 'date_last_physical'},
            {label: 'Date of Next Physical', id: 'date_next_physical'},
            {label: 'Allergies', id: 'allergies'},
            {label: 'Previous Surgeries', id: 'surgeries'},
            {label: 'Emergency Medical Information', id: 'emergency_medical_info'}]
    },
    property_services: {
        label: 'Property Services',
        id: 'property_services',
        fields: [
            {label: 'Property Service Type', id: 'Property_Service_Type'},
            {label: 'Description Of Service', id: 'Property_Service_Description'},
            {label: 'Applies To', id: 'Applies_To'},
            {label: 'Service Location', id: 'Service_Location'},
            {label: 'Provider Name', id: 'Provider_Name'},
            {label: 'Account Number', id: 'Account_Number'},
            {label: 'Additional Property Service Information', id: 'Service_Information'}]
    },
    safes_safety_deposit_boxes: {
        label: 'Safes & Safety Deposit Boxes',
        id: 'safes_safety_deposit_boxes',
        newLabel: 'Safes',
        newId: 'safes',
        fields: [
            {label: 'Bank Name', id: 'Bank_Name'},
            {label: 'Bank Contact Information', id: 'Bank_Contact_Information'},
            {label: 'Box Number', id: 'Box_Number'},
            {label: 'Payment / Account Information', id: 'Account_Information'},
            {label: 'Location Of Key(s)', id: 'Key_Location'},
            {label: 'Location Of Safe', id: 'Safe_Location'},
            {label: 'Combination', id: 'Combination'},
            {label: 'People With Authorized Access', id: 'Authorized_People'},
            {label: 'Contents', id: 'Contents'}]
    },
    property_information: {
        label: 'Property Information',
        id: 'property_information',
        newLabel: 'Real Estate',
        newId: 'real_estate',
        fields: [
            {label: 'Primary Residence', id: 'Primary_Residence'},
            {label: 'Property Type', id: 'Property_Type'},
            {label: 'Property Description', id: 'Property_Description'},
            {label: 'Street', id: 'Street'},
            {label: 'City', id: 'City'},
            {label: 'Zip Code', id: 'Zip'},
            {label: undefined, id: 'Country'},
            {label: undefined, id: 'State'},
            {label: undefined, id: 'Province'},
            {label: 'Location Of Deed', id: 'Deed_Location'},
            {label: 'Purchase Date', id: 'Purchase_Date'},
            {label: 'Purchase Price', id: 'Purchase_Price'},
            {label: 'Estimated Value', id: 'Estimated_Value'},
            {label: 'Alarm Company', id: 'Alarm_Company'},
            {label: 'Alarm Passcode', id: 'Alarm_Passcode'},
            {label: 'Additional Alarm Instructions', id: 'Alarm_Instructions'},
            {label: 'Location Of Circuit Breaker / Fuse Box', id: 'Circuit_Breaker_Information'},
            {label: 'Additional Property Information', id: 'Additional_Property_Information'},
            {label: 'Enter Registration Information?', id: 'Enter_Registration_Information'},
            {label: 'Location Of Tax Assessment', id: 'Tax_Assessment_Location'},
            {label: 'Registered Owner', id: 'Registered_Owner'},
            {label: 'Keyholder(s)', id: 'Keyholders'},
            {label: 'Home Financial Institution', id: 'Home_Financial_Institution'},
            {label: 'Location Of Mortgage Information', id: 'Mortgage_Information_Location'},
            {label: 'Lease Holder', id: 'Lease_Holder'},
            {label: 'Location Of Lease Agreement', id: 'Lease_Agreement_Location'}]
    },
    valuable_information: {
        label: 'Valuable Information', id: 'valuable_information',
        newLabel: 'Valuables', newId: 'valuables',
        fields: [
            {label: 'Item', id: 'Item'},
            {label: 'Type', id: 'Type'},
            {label: 'Value', id: 'Value'},
            {label: 'Model Number', id: 'Model_Number'},
            {label: 'Serial Number', id: 'Serial_Number'},
            {label: 'Location Of Valuable', id: 'Location'},
            {label: 'Location Of Receipt', id: 'Receipt_Location'},
            {label: 'Description', id: 'Description'}]
    },
    vehicles: {
        label: 'Vehicles', id: 'vehicles',
        fields: [
            {label: 'Vehicle Type', id: 'Vehicle_Type'},
            {label: 'Description', id: 'Vehicle_Description'},
            {label: 'Year, Make, and Model', id: 'Year_Make_Model'},
            {label: undefined, id: 'License_Plate_State'},
            {label: 'License Plate Number', id: 'License_Plate_Number'},
            {label: 'VIN', id: 'VIN'},
            {label: 'Financial Institution', id: 'Auto_Financial_Institution'},
            {label: 'Estimated Value', id: 'Vehicle_Estimated_Value'},
            {label: 'Inspection Expiration', id: 'Vehicle_Inspection_Expiration'},
            {label: 'Registration Expiration', id: 'Vehicle_Registration_Expiration'},
            {label: 'Location Of Registration & Title', id: 'Vehicle_Registration_Title_Location'},
            {label: 'Insurance Carrier Information', id: 'Vehicle_Insurance_Carrier_Information'}]
    }
};

let temp: LsDataStructModel[] = [];
for (let key in config) {
    if (!config.hasOwnProperty(key)) {
        continue;
    }

    temp.push(config[key]);
}
export const SUB_CATEGORIES: LsDataStructModel[] = temp;

export const MAJOR_CATEGORIES: LsMajorCategoryModel[] = [
    {
        label: 'Financials',
        id: 'financials',
        categories: [
            config.bank_accounts,
            config.banknotes_bills_and_bonds,
            config.bill_payments,
            config.certificates_of_deposit,
            config.credit_cards,
            config.debts_owed_to_me,
            config.employer_benefits,
            config.government_benefits,
            config.loans,
            config.money_market_funds,
            config.other_assets,
            config.other_income,
            config.other_investments,
            config.policy_information,
            config.property_information,
            config.property_services,
            config.stocks,
            config.tax_information
        ]
    },
    {
        label: 'Relationships',
        id: 'relationships',
        categories: [
            config.family,
            config.friends,
            config.business_associates,
            config.other_relationships,
            config.pet_information,
            config.business_interests
        ]
    },
    {
        label: 'Legal',
        id: 'legal',
        categories: [
            config.executors_guardians,
            config.legal_actions,
            config.living_wills,
            config.policy_information,
            config.power_of_attorney,
            config.will_codicil_trusts
        ]
    },
    {
        label: 'Posessions',
        id: 'possessions',
        categories: [
            config.property_information,
            config.property_services,
            config.safes_safety_deposit_boxes,
            config.valuable_information,
            config.vehicles
        ]
    },
    {
        label: 'Medical',
        id: 'medical',
        categories: [
            config.background,
            config.doctors_specialists,
            config.family_history,
            config.illnesses,
            config.immunizations,
            config.organ_donation,
            config.prescriptions
        ]
    },
    {
        label: 'My Life',
        id: 'my_life',
        categories: [
            config.address,
            config.describe_yourself,
            config.email_addresses,
            config.employment_history,
            config.identification,
            config.membership_information,
            config.military,
            config.online_accounts,
            config.phone_numbers,
            config.profile,
            config.religion,
            config.schools
        ]
    },
    {
        label: 'Legacy',
        id: 'legacy',
        categories: [
            config.funeral_services,
            config.legacy_communications,
            config.memorialization,
            config.people_to_notify,
            config.preplanning,
            config.service_arrangements,
            config.special_bequests
        ]
    }
];
