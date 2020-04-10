/* tslint:disable */
/* eslint-disable */
/**
 * User account and session management
 * Provides HTTP endpoints to manage User Accounts and User Sessions.
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum ErrorMessage {
    SERVER_ERROR = 'SERVER_ERROR',
    NOT_FOUND = 'NOT_FOUND',
    BAD_REQUEST = 'BAD_REQUEST',
    ACCESS_DENIED = 'ACCESS_DENIED',
    PASSWORD_RESET_REQUESTED = 'PASSWORD_RESET_REQUESTED',
    SESSION_ALREADY_IMPERSONATED = 'SESSION_ALREADY_IMPERSONATED',
    SESSION_NOT_IMPERSONATED = 'SESSION_NOT_IMPERSONATED',
    SESSION_NOT_ENABLED = 'SESSION_NOT_ENABLED',
    USER_NOT_ENABLED = 'USER_NOT_ENABLED',
    USER_AGREEMENT_REQUESTED = 'USER_AGREEMENT_REQUESTED',
    CONCURRENT_ACCESS = 'CONCURRENT_ACCESS'
}

export function ErrorMessageFromJSON(json: any): ErrorMessage {
    return ErrorMessageFromJSONTyped(json, false);
}

export function ErrorMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorMessage {
    return json as ErrorMessage;
}

export function ErrorMessageToJSON(value?: ErrorMessage | null): any {
    return value as any;
}

