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
/**
 * A request to update an existing account. All fields are optional
 * @export
 * @interface ServiceAccountUpdateSchema
 */
export interface ServiceAccountUpdateSchema {
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountUpdateSchema
     */
    clientId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountUpdateSchema
     */
    displayName?: string | null;
}

export function ServiceAccountUpdateSchemaFromJSON(json: any): ServiceAccountUpdateSchema {
    return ServiceAccountUpdateSchemaFromJSONTyped(json, false);
}

export function ServiceAccountUpdateSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceAccountUpdateSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
    };
}

export function ServiceAccountUpdateSchemaToJSON(value?: ServiceAccountUpdateSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientId': value.clientId,
        'displayName': value.displayName,
    };
}


