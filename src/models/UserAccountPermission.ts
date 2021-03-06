/* tslint:disable */
/* eslint-disable */
/**
 * User account and session management
 * Provides HTTP endpoints to manage User Accounts and User Sessions.
 *
 * The version of the OpenAPI document: 0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    LocalizedString,
    LocalizedStringFromJSON,
    LocalizedStringFromJSONTyped,
    LocalizedStringToJSON,
} from './';

/**
 * 
 * @export
 * @interface UserAccountPermission
 */
export interface UserAccountPermission {
    /**
     * 
     * @type {string}
     * @memberof UserAccountPermission
     */
    code: string;
    /**
     * 
     * @type {LocalizedString}
     * @memberof UserAccountPermission
     */
    name: LocalizedString;
}

export function UserAccountPermissionFromJSON(json: any): UserAccountPermission {
    return UserAccountPermissionFromJSONTyped(json, false);
}

export function UserAccountPermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAccountPermission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'name': LocalizedStringFromJSON(json['name']),
    };
}

export function UserAccountPermissionToJSON(value?: UserAccountPermission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'name': LocalizedStringToJSON(value.name),
    };
}


