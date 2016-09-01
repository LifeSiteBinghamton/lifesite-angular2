import { CustomerModel, SubscriptionModel } from '../chargebee';

export interface UserModel {
    first_name: string;
    last_name: string;
    email: string;
    id: string;
    two_factor_enabled: boolean;
    customer: CustomerModel;
    subscription?: SubscriptionModel;
}
