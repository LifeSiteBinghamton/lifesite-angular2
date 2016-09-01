import { UserModel } from './user.model';
import { SubscriptionModel } from '../chargebee';

/**
 * @class
 * @name User
 * @description
 * Class definition for a user object.  Contains getters and setters for userid, email address, and if two factor is
 * enabled.
 */
export class User {
    private static _instance: User = null;
    private _id: string;
    private _email: string;
    private _firstName: string;
    private _lastName: string;
    private _twoFactorEnabled: boolean;
    private _subscription: SubscriptionModel;

    constructor(data: UserModel) {
        this._email = data.email;
        this._id = data.id;
        this._firstName = data.first_name;
        this._lastName = data.last_name;
        this._twoFactorEnabled = data.two_factor_enabled;
        this._subscription = data.subscription;

        sessionStorage.setItem('userId', data.id);
    }

    get email(): string {
        return this._email;
    }

    get id(): string {
        return this._id;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }
    get twoFactorEnabled(): boolean {
        return this._twoFactorEnabled;
    }

    get subscription(): SubscriptionModel {
        return this._subscription;
    }

    get plan(): string {
        return this._subscription ? this._subscription.plan_id : 'lifesite-basic';
    }

    /**
     * Returns an instance of the User
     *
     * @param {UserModel} data The data that we're trying to store as this user.
     *
     * @return {any} instance A user instance with access to it's data members and methods.
     */
    static instance(data?: UserModel) {
        if (this._instance === null) {
            this._instance = new User(data);
        }

        return this._instance;
    }

    static clear() {
        this._instance = null;
    }

    /**
     * Returns the user's id by retrieving the cached value from session storage.
     * @return {string} The user's unique id.
     */
    static get userId(): string {
        return sessionStorage.getItem('userId');
    }

    static set userId(id: string) {
        sessionStorage.setItem('userId', id);
    }

    /**
     *
     * @returns {{id: string, email: string, two_factor_enabled: boolean}}
     */
    static toJson() {
        return {
            id: this._instance.id,
            email: this._instance.email,
            first_name: this._instance.firstName,
            last_name: this._instance.lastName,
            two_factor_enabled: this._instance.twoFactorEnabled
        };
    }
}
