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
    LocalizedString,
    LocalizedStringFromJSON,
    LocalizedStringFromJSONTyped,
    LocalizedStringToJSON,
} from './';

/**
 * A request to create or update a permission
 * @export
 * @interface CreateOrUpdatePermissionPayload
 */
export interface CreateOrUpdatePermissionPayload {
    /**
     * 
     * @type {LocalizedString}
     * @memberof CreateOrUpdatePermissionPayload
     */
    name?: LocalizedString;
}

export function CreateOrUpdatePermissionPayloadFromJSON(json: any): CreateOrUpdatePermissionPayload {
    return CreateOrUpdatePermissionPayloadFromJSONTyped(json, false);
}

export function CreateOrUpdatePermissionPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrUpdatePermissionPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : LocalizedStringFromJSON(json['name']),
    };
}

export function CreateOrUpdatePermissionPayloadToJSON(value?: CreateOrUpdatePermissionPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': LocalizedStringToJSON(value.name),
    };
}

