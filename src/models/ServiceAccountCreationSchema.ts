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
/**
 * A request to create a new account
 * @export
 * @interface ServiceAccountCreationSchema
 */
export interface ServiceAccountCreationSchema {
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountCreationSchema
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountCreationSchema
     */
    clientId?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountCreationSchema
     */
    displayName?: string;
}

export function ServiceAccountCreationSchemaFromJSON(json: any): ServiceAccountCreationSchema {
    return ServiceAccountCreationSchemaFromJSONTyped(json, false);
}

export function ServiceAccountCreationSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceAccountCreationSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
    };
}

export function ServiceAccountCreationSchemaToJSON(value?: ServiceAccountCreationSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'clientId': value.clientId,
        'displayName': value.displayName,
    };
}


