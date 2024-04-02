/* tslint:disable */
/* eslint-disable */
/**
 * Social Service
 * Solomon AI Social Service
 *
 * The version of the OpenAPI document: 0.1
 * Contact: yoanyomba@solomon-ai.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateTeamBody,
  CreateTeamResponse,
  DeleteTeamResponse,
  GetTeamResponse,
  InternalErrorMessageResponse,
  PathUnknownErrorMessageResponse,
  Status,
  ValidationErrorMessageResponse,
} from '../models/index';
import {
    CreateTeamBodyFromJSON,
    CreateTeamBodyToJSON,
    CreateTeamResponseFromJSON,
    CreateTeamResponseToJSON,
    DeleteTeamResponseFromJSON,
    DeleteTeamResponseToJSON,
    GetTeamResponseFromJSON,
    GetTeamResponseToJSON,
    InternalErrorMessageResponseFromJSON,
    InternalErrorMessageResponseToJSON,
    PathUnknownErrorMessageResponseFromJSON,
    PathUnknownErrorMessageResponseToJSON,
    StatusFromJSON,
    StatusToJSON,
    ValidationErrorMessageResponseFromJSON,
    ValidationErrorMessageResponseToJSON,
} from '../models/index';

export interface CreateTeamRequest {
    adminUserId: string;
    createTeamBody: CreateTeamBody;
}

export interface DeleteTeamRequest {
    adminUserId: string;
    teamId: string;
}

export interface GetTeamRequest {
    adminOrMemberUserId: string;
    teamId: string;
    includeMembers?: boolean;
    includePublications?: boolean;
    includeAuditLogs?: boolean;
}

/**
 * 
 */
export class TeamApi extends runtime.BaseAPI {

    /**
     * This endpoint enables a client to create a team
     * Creates a team
     */
    async createTeamRaw(requestParameters: CreateTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateTeamResponse>> {
        if (requestParameters.adminUserId === null || requestParameters.adminUserId === undefined) {
            throw new runtime.RequiredError('adminUserId','Required parameter requestParameters.adminUserId was null or undefined when calling createTeam.');
        }

        if (requestParameters.createTeamBody === null || requestParameters.createTeamBody === undefined) {
            throw new runtime.RequiredError('createTeamBody','Required parameter requestParameters.createTeamBody was null or undefined when calling createTeam.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/users/team/{adminUserId}`.replace(`{${"adminUserId"}}`, encodeURIComponent(String(requestParameters.adminUserId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTeamBodyToJSON(requestParameters.createTeamBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateTeamResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint enables a client to create a team
     * Creates a team
     */
    async createTeam(requestParameters: CreateTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateTeamResponse> {
        const response = await this.createTeamRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint deletes a specific team.
     * Delete a team
     */
    async deleteTeamRaw(requestParameters: DeleteTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteTeamResponse>> {
        if (requestParameters.adminUserId === null || requestParameters.adminUserId === undefined) {
            throw new runtime.RequiredError('adminUserId','Required parameter requestParameters.adminUserId was null or undefined when calling deleteTeam.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling deleteTeam.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/team/{adminUserId}/{teamId}`.replace(`{${"adminUserId"}}`, encodeURIComponent(String(requestParameters.adminUserId))).replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteTeamResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint deletes a specific team.
     * Delete a team
     */
    async deleteTeam(requestParameters: DeleteTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteTeamResponse> {
        const response = await this.deleteTeamRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint gets a specific team.
     * Get a team
     */
    async getTeamRaw(requestParameters: GetTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetTeamResponse>> {
        if (requestParameters.adminOrMemberUserId === null || requestParameters.adminOrMemberUserId === undefined) {
            throw new runtime.RequiredError('adminOrMemberUserId','Required parameter requestParameters.adminOrMemberUserId was null or undefined when calling getTeam.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling getTeam.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeMembers !== undefined) {
            queryParameters['includeMembers'] = requestParameters.includeMembers;
        }

        if (requestParameters.includePublications !== undefined) {
            queryParameters['includePublications'] = requestParameters.includePublications;
        }

        if (requestParameters.includeAuditLogs !== undefined) {
            queryParameters['includeAuditLogs'] = requestParameters.includeAuditLogs;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/team/{adminOrMemberUserId}/{teamId}`.replace(`{${"adminOrMemberUserId"}}`, encodeURIComponent(String(requestParameters.adminOrMemberUserId))).replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetTeamResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint gets a specific team.
     * Get a team
     */
    async getTeam(requestParameters: GetTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetTeamResponse> {
        const response = await this.getTeamRaw(requestParameters, initOverrides);
        return await response.value();
    }

}