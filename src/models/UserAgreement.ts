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

import { exists, mapValues } from '../runtime';
import {
    UserAgreementState,
    UserAgreementStateFromJSON,
    UserAgreementStateFromJSONTyped,
    UserAgreementStateToJSON,
} from './';

/**
 * 
 * @export
 * @interface UserAgreement
 */
export interface UserAgreement {
    /**
     * 
     * @type {UserAgreementState}
     * @memberof UserAgreement
     */
    state: UserAgreementState;
}

export function UserAgreementFromJSON(json: any): UserAgreement {
    return UserAgreementFromJSONTyped(json, false);
}

export function UserAgreementFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAgreement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'state': UserAgreementStateFromJSON(json['state']),
    };
}

export function UserAgreementToJSON(value?: UserAgreement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'state': UserAgreementStateToJSON(value.state),
    };
}


