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
 * 
 * @export
 * @interface Organization
 */
export interface Organization {
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    uuid?: string;
    /**
     * 
     * @type {LocalizedString}
     * @memberof Organization
     */
    name?: LocalizedString;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    parentUuid?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Organization
     */
    equisoftConnectProfiles?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Organization
     */
    equisoftPlanProfiles?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof Organization
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Organization
     */
    modifiedAt?: Date | null;
}

export function OrganizationFromJSON(json: any): Organization {
    return OrganizationFromJSONTyped(json, false);
}

export function OrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Organization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : LocalizedStringFromJSON(json['name']),
        'parentUuid': !exists(json, 'parentUuid') ? undefined : json['parentUuid'],
        'equisoftConnectProfiles': !exists(json, 'equisoftConnectProfiles') ? undefined : json['equisoftConnectProfiles'],
        'equisoftPlanProfiles': !exists(json, 'equisoftPlanProfiles') ? undefined : json['equisoftPlanProfiles'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (json['modifiedAt'] === null ? null : new Date(json['modifiedAt'])),
    };
}

export function OrganizationToJSON(value?: Organization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': LocalizedStringToJSON(value.name),
        'parentUuid': value.parentUuid,
        'equisoftConnectProfiles': value.equisoftConnectProfiles,
        'equisoftPlanProfiles': value.equisoftPlanProfiles,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt === null ? null : value.modifiedAt.toISOString()),
    };
}


