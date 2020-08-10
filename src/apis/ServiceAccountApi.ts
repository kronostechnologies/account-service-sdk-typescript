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


import * as runtime from '../runtime';
import {
    ErrorPayload,
    ErrorPayloadFromJSON,
    ErrorPayloadToJSON,
    ServiceAccountCreationSchema,
    ServiceAccountCreationSchemaFromJSON,
    ServiceAccountCreationSchemaToJSON,
    ServiceAccountSchema,
    ServiceAccountSchemaFromJSON,
    ServiceAccountSchemaToJSON,
} from '../models';

export interface CreateServiceAccountRequest {
    serviceAccountCreationSchema: ServiceAccountCreationSchema;
}

export interface GetServiceAccountRequest {
    uuid: string;
}

/**
 * 
 */
export class ServiceAccountApi extends runtime.BaseAPI {

    /**
     * Creates a new service account
     */
    async createServiceAccountRaw(requestParameters: CreateServiceAccountRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.serviceAccountCreationSchema === null || requestParameters.serviceAccountCreationSchema === undefined) {
            throw new runtime.RequiredError('serviceAccountCreationSchema','Required parameter requestParameters.serviceAccountCreationSchema was null or undefined when calling createServiceAccount.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/serviceAccounts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ServiceAccountCreationSchemaToJSON(requestParameters.serviceAccountCreationSchema),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates a new service account
     */
    async createServiceAccount(requestParameters: CreateServiceAccountRequest): Promise<void> {
        await this.createServiceAccountRaw(requestParameters);
    }

    /**
     * Get detailed information about a user account.
     */
    async getServiceAccountRaw(requestParameters: GetServiceAccountRequest): Promise<runtime.ApiResponse<ServiceAccountSchema>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getServiceAccount.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/serviceAccounts/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ServiceAccountSchemaFromJSON(jsonValue));
    }

    /**
     * Get detailed information about a user account.
     */
    async getServiceAccount(requestParameters: GetServiceAccountRequest): Promise<ServiceAccountSchema> {
        const response = await this.getServiceAccountRaw(requestParameters);
        return await response.value();
    }

}