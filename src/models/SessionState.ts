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
 * States: * `NEW` - Session creation is not finished.  It can\'t be used by consumer. * `ENABLED` - Session is active and ready. * `SUSPENDED` - Session idle for too long.  User has to reenter credentials to activate it (Not implemented yet). * `EXPIRED` - Session is expired. * `DELETED` - Session exists but is soft-deleted (Not implemented yet). 
 * @export
 * @enum {string}
 */
export enum SessionState {
    NEW = 'NEW',
    ENABLED = 'ENABLED',
    SUSPENDED = 'SUSPENDED',
    EXPIRED = 'EXPIRED',
    DELETED = 'DELETED'
}

export function SessionStateFromJSON(json: any): SessionState {
    return SessionStateFromJSONTyped(json, false);
}

export function SessionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionState {
    return json as SessionState;
}

export function SessionStateToJSON(value?: SessionState | null): any {
    return value as any;
}

