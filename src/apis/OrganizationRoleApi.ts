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
    CreateRole,
    CreateRoleFromJSON,
    CreateRoleToJSON,
    ErrorPayload,
    ErrorPayloadFromJSON,
    ErrorPayloadToJSON,
    RoleCreated,
    RoleCreatedFromJSON,
    RoleCreatedToJSON,
} from '../models';

export interface CreateOrUpdateRoleRequest {
    organisationId: string;
    roleId: string;
    createRole: CreateRole;
}

export interface CreateRoleRequest {
    organizationId: string;
    createRole: CreateRole;
}

/**
 * 
 */
export class OrganizationRoleApi extends runtime.BaseAPI {

    /**
     * Create or update organization roles for a given uuid
     */
    async createOrUpdateRoleRaw(requestParameters: CreateOrUpdateRoleRequest): Promise<runtime.ApiResponse<RoleCreated>> {
        if (requestParameters.organisationId === null || requestParameters.organisationId === undefined) {
            throw new runtime.RequiredError('organisationId','Required parameter requestParameters.organisationId was null or undefined when calling createOrUpdateRole.');
        }

        if (requestParameters.roleId === null || requestParameters.roleId === undefined) {
            throw new runtime.RequiredError('roleId','Required parameter requestParameters.roleId was null or undefined when calling createOrUpdateRole.');
        }

        if (requestParameters.createRole === null || requestParameters.createRole === undefined) {
            throw new runtime.RequiredError('createRole','Required parameter requestParameters.createRole was null or undefined when calling createOrUpdateRole.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/organizations/{organisationId}/roles/{roleId}`.replace(`{${"organisationId"}}`, encodeURIComponent(String(requestParameters.organisationId))).replace(`{${"roleId"}}`, encodeURIComponent(String(requestParameters.roleId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreateRoleToJSON(requestParameters.createRole),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RoleCreatedFromJSON(jsonValue));
    }

    /**
     * Create or update organization roles for a given uuid
     */
    async createOrUpdateRole(requestParameters: CreateOrUpdateRoleRequest): Promise<RoleCreated> {
        const response = await this.createOrUpdateRoleRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create organization roles for a given uuid
     */
    async createRoleRaw(requestParameters: CreateRoleRequest): Promise<runtime.ApiResponse<RoleCreated>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling createRole.');
        }

        if (requestParameters.createRole === null || requestParameters.createRole === undefined) {
            throw new runtime.RequiredError('createRole','Required parameter requestParameters.createRole was null or undefined when calling createRole.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/organizations/{organizationId}/roles`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateRoleToJSON(requestParameters.createRole),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RoleCreatedFromJSON(jsonValue));
    }

    /**
     * Create organization roles for a given uuid
     */
    async createRole(requestParameters: CreateRoleRequest): Promise<RoleCreated> {
        const response = await this.createRoleRaw(requestParameters);
        return await response.value();
    }

}