import { TranslateService } from 'ng2-translate';

const ERROR_MESSAGES = {
    en: {
        FATAL: 'The server is not responding.',
        FORBIDDEN: 'Unauthorized request.',

        USER_LOCKED_OUT: 'There have been too many attempts to login to this account. Please contact support.',
        USERNAME_EMAIL_REQUIRED: 'Your email is required to login.', // login
        INVALID_CREDENTIALS: 'Invalid email or password.', // login
        LOGIN_FAILED_EMAIL_NOT_VERIFIED: 'You must verify your email before you can login.', // login
        INVALID_TOKEN: 'Oops! Looks like the registration link is invalid.', // registration validate
        USER_NOT_FOUND: 'We couldn\'t find the user for this registration link.', // registration validate
        EMAIL_REQUIRED: 'You must provide your email to reset your password.', // reset password
        PAYMENT_METHOD_VERIFICATION_FAILED: 'Invalid credit card expiration date.' // expiration date invalid
    },
    es: {}
};

export const ERROR_CODES = {
    USERNAME_EMAIL_REQUIRED: 'USERNAME_EMAIL_REQUIRED',
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    LOGIN_FAILED_EMAIL_NOT_VERIFIED: 'LOGIN_FAILED_EMAIL_NOT_VERIFIED',
    INVALID_TOKEN: 'INVALID_TOKEN',
    USER_NOT_FOUND: 'USER_NOT_FOUND',
    EMAIL_REQUIRED: 'EMAIL_REQUIRED',
    EMAIL_NOT_FOUND: 'EMAIL_NOT_FOUND',
    USER_LOCKED_OUT: 'USER_LOCKED_OUT',
    FATAL: 'FATAL',
    FORBIDDEN: 'FORBIDDEN',
    // Chargebee error codes
    PAYMENT_METHOD_VERIFICATION_FAILED: 'payment_method_verification_failed'
};

/**
 * If an error exists - looks up the error code and returns the message for the code.
 *
 * @param  {string} code The error code on which to search the enumeration.
 * @param  {TranslateService} translate The service which translates the error code into the appropriate language.
 *
 * @return {string} Returns the message for the code, or false if it does not exist for the code.
 */
export function getErrorMessage(code: string, translate: TranslateService) {
    let currentLanguage = translate.currentLang;
    let translationMap = ERROR_MESSAGES[currentLanguage];
    return translationMap[code] || false;
}
