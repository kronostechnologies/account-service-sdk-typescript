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
    ErrorMessage,
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './';

/**
 * 
 * @export
 * @interface ErrorPayload
 */
export interface ErrorPayload {
    /**
     * 
     * @type {ErrorMessage}
     * @memberof ErrorPayload
     */
    message: ErrorMessage;
    /**
     * 
     * @type {string}
     * @memberof ErrorPayload
     */
    description?: string | null;
}

export function ErrorPayloadFromJSON(json: any): ErrorPayload {
    return ErrorPayloadFromJSONTyped(json, false);
}

export function ErrorPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': ErrorMessageFromJSON(json['message']),
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ErrorPayloadToJSON(value?: ErrorPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': ErrorMessageToJSON(value.message),
        'description': value.description,
    };
}


