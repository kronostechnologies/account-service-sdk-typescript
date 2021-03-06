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
    OrganizationPathElement,
    OrganizationPathElementFromJSON,
    OrganizationPathElementFromJSONTyped,
    OrganizationPathElementToJSON,
    UserAccountPermission,
    UserAccountPermissionFromJSON,
    UserAccountPermissionFromJSONTyped,
    UserAccountPermissionToJSON,
    UserAccountRole,
    UserAccountRoleFromJSON,
    UserAccountRoleFromJSONTyped,
    UserAccountRoleToJSON,
} from './';

/**
 * 
 * @export
 * @interface RolesOnOrganization
 */
export interface RolesOnOrganization {
    /**
     * 
     * @type {string}
     * @memberof RolesOnOrganization
     */
    uuid: string;
    /**
     * 
     * @type {LocalizedString}
     * @memberof RolesOnOrganization
     */
    name: LocalizedString;
    /**
     * List of parents uuids, ordered by oldest ancestor
     * @type {Array<OrganizationPathElement>}
     * @memberof RolesOnOrganization
     */
    path: Array<OrganizationPathElement>;
    /**
     * 
     * @type {Array<UserAccountRole>}
     * @memberof RolesOnOrganization
     */
    roles: Array<UserAccountRole>;
    /**
     * 
     * @type {Array<UserAccountPermission>}
     * @memberof RolesOnOrganization
     */
    permissions: Array<UserAccountPermission>;
}

export function RolesOnOrganizationFromJSON(json: any): RolesOnOrganization {
    return RolesOnOrganizationFromJSONTyped(json, false);
}

export function RolesOnOrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): RolesOnOrganization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'name': LocalizedStringFromJSON(json['name']),
        'path': ((json['path'] as Array<any>).map(OrganizationPathElementFromJSON)),
        'roles': ((json['roles'] as Array<any>).map(UserAccountRoleFromJSON)),
        'permissions': ((json['permissions'] as Array<any>).map(UserAccountPermissionFromJSON)),
    };
}

export function RolesOnOrganizationToJSON(value?: RolesOnOrganization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': LocalizedStringToJSON(value.name),
        'path': ((value.path as Array<any>).map(OrganizationPathElementToJSON)),
        'roles': ((value.roles as Array<any>).map(UserAccountRoleToJSON)),
        'permissions': ((value.permissions as Array<any>).map(UserAccountPermissionToJSON)),
    };
}


