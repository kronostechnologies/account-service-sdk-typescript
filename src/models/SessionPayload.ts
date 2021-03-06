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
    SsoProvider,
    SsoProviderFromJSON,
    SsoProviderFromJSONTyped,
    SsoProviderToJSON,
} from './';

/**
 * Data needed for the creation of a user session.
 * @export
 * @interface SessionPayload
 */
export interface SessionPayload {
    /**
     * Globally unique identifier.
     * @type {string}
     * @memberof SessionPayload
     */
    userUuid: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPayload
     */
    enable?: boolean;
    /**
     * 
     * @type {SsoProvider}
     * @memberof SessionPayload
     */
    sso?: SsoProvider;
    /**
     * Indicate that the session is initiated from a public computer.
     * @type {boolean}
     * @memberof SessionPayload
     */
    publicComputer?: boolean;
    /**
     * Indicate that the session is initiated from a mobile device.
     * @type {boolean}
     * @memberof SessionPayload
     */
    mobileDevice?: boolean;
    /**
     * Indicate the domain name the session cookie was emitted for. If null, the cookie is assumed to be on the current hostname.
     * @type {string}
     * @memberof SessionPayload
     */
    cookieDomain?: string | null;
}

export function SessionPayloadFromJSON(json: any): SessionPayload {
    return SessionPayloadFromJSONTyped(json, false);
}

export function SessionPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userUuid': json['userUuid'],
        'enable': !exists(json, 'enable') ? undefined : json['enable'],
        'sso': !exists(json, 'sso') ? undefined : SsoProviderFromJSON(json['sso']),
        'publicComputer': !exists(json, 'publicComputer') ? undefined : json['publicComputer'],
        'mobileDevice': !exists(json, 'mobileDevice') ? undefined : json['mobileDevice'],
        'cookieDomain': !exists(json, 'cookieDomain') ? undefined : json['cookieDomain'],
    };
}

export function SessionPayloadToJSON(value?: SessionPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userUuid': value.userUuid,
        'enable': value.enable,
        'sso': SsoProviderToJSON(value.sso),
        'publicComputer': value.publicComputer,
        'mobileDevice': value.mobileDevice,
        'cookieDomain': value.cookieDomain,
    };
}


