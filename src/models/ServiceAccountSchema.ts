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
    ServiceAccountStatus,
    ServiceAccountStatusFromJSON,
    ServiceAccountStatusFromJSONTyped,
    ServiceAccountStatusToJSON,
} from './';

/**
 * Represents a service account
 * @export
 * @interface ServiceAccountSchema
 */
export interface ServiceAccountSchema {
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountSchema
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountSchema
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountSchema
     */
    clientId?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountSchema
     */
    displayName?: string;
    /**
     * 
     * @type {ServiceAccountStatus}
     * @memberof ServiceAccountSchema
     */
    status?: ServiceAccountStatus;
    /**
     * 
     * @type {Date}
     * @memberof ServiceAccountSchema
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ServiceAccountSchema
     */
    modifiedAt?: Date | null;
}

export function ServiceAccountSchemaFromJSON(json: any): ServiceAccountSchema {
    return ServiceAccountSchemaFromJSONTyped(json, false);
}

export function ServiceAccountSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceAccountSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'status': !exists(json, 'status') ? undefined : ServiceAccountStatusFromJSON(json['status']),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (json['modifiedAt'] === null ? null : new Date(json['modifiedAt'])),
    };
}

export function ServiceAccountSchemaToJSON(value?: ServiceAccountSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'clientId': value.clientId,
        'displayName': value.displayName,
        'status': ServiceAccountStatusToJSON(value.status),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt === null ? null : value.modifiedAt.toISOString()),
    };
}

