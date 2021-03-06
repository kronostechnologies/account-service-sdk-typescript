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
 * User legacy roles
 * @export
 * @interface LegacyRoleSchema
 */
export interface LegacyRoleSchema {
    /**
     * 
     * @type {string}
     * @memberof LegacyRoleSchema
     */
    code: string;
    /**
     * 
     * @type {LocalizedString}
     * @memberof LegacyRoleSchema
     */
    name: LocalizedString;
}

export function LegacyRoleSchemaFromJSON(json: any): LegacyRoleSchema {
    return LegacyRoleSchemaFromJSONTyped(json, false);
}

export function LegacyRoleSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): LegacyRoleSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'name': LocalizedStringFromJSON(json['name']),
    };
}

export function LegacyRoleSchemaToJSON(value?: LegacyRoleSchema | null): any {
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


