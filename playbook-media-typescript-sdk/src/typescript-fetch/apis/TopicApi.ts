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
  CreateTopicResponse,
  GetTopicsOfCommunitiesUserFollowsResponse,
  InternalErrorMessageResponse,
  PathUnknownErrorMessageResponse,
  Status,
  Topic,
  ValidationErrorMessageResponse,
} from '../models/index';
import {
    CreateTopicResponseFromJSON,
    CreateTopicResponseToJSON,
    GetTopicsOfCommunitiesUserFollowsResponseFromJSON,
    GetTopicsOfCommunitiesUserFollowsResponseToJSON,
    InternalErrorMessageResponseFromJSON,
    InternalErrorMessageResponseToJSON,
    PathUnknownErrorMessageResponseFromJSON,
    PathUnknownErrorMessageResponseToJSON,
    StatusFromJSON,
    StatusToJSON,
    TopicFromJSON,
    TopicToJSON,
    ValidationErrorMessageResponseFromJSON,
    ValidationErrorMessageResponseToJSON,
} from '../models/index';

export interface CreateTopicRequest {
    userId: string;
    communityProfileId: string;
    topic: Topic;
}

export interface GetTopicsOfCommunitiesUserFollowsRequest {
    userId: string;
    limit: string;
}

/**
 * 
 */
export class TopicApi extends runtime.BaseAPI {

    /**
     * This endpoint enables a client to create a topic
     * Create A Topic
     */
    async createTopicRaw(requestParameters: CreateTopicRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateTopicResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling createTopic.');
        }

        if (requestParameters.communityProfileId === null || requestParameters.communityProfileId === undefined) {
            throw new runtime.RequiredError('communityProfileId','Required parameter requestParameters.communityProfileId was null or undefined when calling createTopic.');
        }

        if (requestParameters.topic === null || requestParameters.topic === undefined) {
            throw new runtime.RequiredError('topic','Required parameter requestParameters.topic was null or undefined when calling createTopic.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/users/{userId}/community/{communityProfileId}/topic`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"communityProfileId"}}`, encodeURIComponent(String(requestParameters.communityProfileId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TopicToJSON(requestParameters.topic),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateTopicResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint enables a client to create a topic
     * Create A Topic
     */
    async createTopic(requestParameters: CreateTopicRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateTopicResponse> {
        const response = await this.createTopicRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint enables a client to get topics of communities a user follows
     * Get Topics Of Communities User Follows
     */
    async getTopicsOfCommunitiesUserFollowsRaw(requestParameters: GetTopicsOfCommunitiesUserFollowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetTopicsOfCommunitiesUserFollowsResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getTopicsOfCommunitiesUserFollows.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling getTopicsOfCommunitiesUserFollows.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userId}/topics`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetTopicsOfCommunitiesUserFollowsResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint enables a client to get topics of communities a user follows
     * Get Topics Of Communities User Follows
     */
    async getTopicsOfCommunitiesUserFollows(requestParameters: GetTopicsOfCommunitiesUserFollowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetTopicsOfCommunitiesUserFollowsResponse> {
        const response = await this.getTopicsOfCommunitiesUserFollowsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
