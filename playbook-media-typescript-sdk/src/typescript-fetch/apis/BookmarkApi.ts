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
  BookmarkPostResponse,
  BookmarkPublicationResponse,
  InternalErrorMessageResponse,
  PathUnknownErrorMessageResponse,
  RemoveBookmarkedPostResponse,
  Status,
  ValidationErrorMessageResponse,
} from '../models/index';
import {
    BookmarkPostResponseFromJSON,
    BookmarkPostResponseToJSON,
    BookmarkPublicationResponseFromJSON,
    BookmarkPublicationResponseToJSON,
    InternalErrorMessageResponseFromJSON,
    InternalErrorMessageResponseToJSON,
    PathUnknownErrorMessageResponseFromJSON,
    PathUnknownErrorMessageResponseToJSON,
    RemoveBookmarkedPostResponseFromJSON,
    RemoveBookmarkedPostResponseToJSON,
    StatusFromJSON,
    StatusToJSON,
    ValidationErrorMessageResponseFromJSON,
    ValidationErrorMessageResponseToJSON,
} from '../models/index';

export interface BookmarkPostRequest {
    userId: string;
    postId: string;
}

export interface BookmarkPublicationRequest {
    userId: string;
    publicationId: string;
}

export interface RemoveBookmarkedPostRequest {
    userId: string;
    postId: string;
    postType: RemoveBookmarkedPostPostTypeEnum;
}

export interface RemoveBookmarkedPublicationRequest {
    userId: string;
    publicationId: string;
}

/**
 * 
 */
export class BookmarkApi extends runtime.BaseAPI {

    /**
     * This endpoint enables a client to bookmark a post
     * Bookmarks a post
     */
    async bookmarkPostRaw(requestParameters: BookmarkPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BookmarkPostResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling bookmarkPost.');
        }

        if (requestParameters.postId === null || requestParameters.postId === undefined) {
            throw new runtime.RequiredError('postId','Required parameter requestParameters.postId was null or undefined when calling bookmarkPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userId}/post/bookmark/{postId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"postId"}}`, encodeURIComponent(String(requestParameters.postId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BookmarkPostResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint enables a client to bookmark a post
     * Bookmarks a post
     */
    async bookmarkPost(requestParameters: BookmarkPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BookmarkPostResponse> {
        const response = await this.bookmarkPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint enables a client to bookmark a publication
     * Bookmarks a publication
     */
    async bookmarkPublicationRaw(requestParameters: BookmarkPublicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BookmarkPublicationResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling bookmarkPublication.');
        }

        if (requestParameters.publicationId === null || requestParameters.publicationId === undefined) {
            throw new runtime.RequiredError('publicationId','Required parameter requestParameters.publicationId was null or undefined when calling bookmarkPublication.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userId}/publication/{publicationId}/bookmark`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"publicationId"}}`, encodeURIComponent(String(requestParameters.publicationId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BookmarkPublicationResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint enables a client to bookmark a publication
     * Bookmarks a publication
     */
    async bookmarkPublication(requestParameters: BookmarkPublicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BookmarkPublicationResponse> {
        const response = await this.bookmarkPublicationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint enables a client to delete a bookmarked post
     * Deletes A Bookmarked Post
     */
    async removeBookmarkedPostRaw(requestParameters: RemoveBookmarkedPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RemoveBookmarkedPostResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling removeBookmarkedPost.');
        }

        if (requestParameters.postId === null || requestParameters.postId === undefined) {
            throw new runtime.RequiredError('postId','Required parameter requestParameters.postId was null or undefined when calling removeBookmarkedPost.');
        }

        if (requestParameters.postType === null || requestParameters.postType === undefined) {
            throw new runtime.RequiredError('postType','Required parameter requestParameters.postType was null or undefined when calling removeBookmarkedPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.postType !== undefined) {
            queryParameters['postType'] = requestParameters.postType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userId}/post/{postId}/bookmark`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"postId"}}`, encodeURIComponent(String(requestParameters.postId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RemoveBookmarkedPostResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint enables a client to delete a bookmarked post
     * Deletes A Bookmarked Post
     */
    async removeBookmarkedPost(requestParameters: RemoveBookmarkedPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RemoveBookmarkedPostResponse> {
        const response = await this.removeBookmarkedPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint enables a client to delete a bookmarked publication
     * Deletes A Bookmarked Publication
     */
    async removeBookmarkedPublicationRaw(requestParameters: RemoveBookmarkedPublicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RemoveBookmarkedPostResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling removeBookmarkedPublication.');
        }

        if (requestParameters.publicationId === null || requestParameters.publicationId === undefined) {
            throw new runtime.RequiredError('publicationId','Required parameter requestParameters.publicationId was null or undefined when calling removeBookmarkedPublication.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userId}/publication/{publicationId}/bookmark`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"publicationId"}}`, encodeURIComponent(String(requestParameters.publicationId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RemoveBookmarkedPostResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint enables a client to delete a bookmarked publication
     * Deletes A Bookmarked Publication
     */
    async removeBookmarkedPublication(requestParameters: RemoveBookmarkedPublicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RemoveBookmarkedPostResponse> {
        const response = await this.removeBookmarkedPublicationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const RemoveBookmarkedPostPostTypeEnum = {
    Unspecified: 'POST_TYPE_UNSPECIFIED',
    Post: 'POST_TYPE_POST',
    Repost: 'POST_TYPE_REPOST',
    Question: 'POST_TYPE_QUESTION',
    Achievement: 'POST_TYPE_ACHIEVEMENT',
    Announcement: 'POST_TYPE_ANNOUNCEMENT',
    Poll: 'POST_TYPE_POLL',
    Article: 'POST_TYPE_ARTICLE',
    ShortStory: 'POST_TYPE_SHORT_STORY'
} as const;
export type RemoveBookmarkedPostPostTypeEnum = typeof RemoveBookmarkedPostPostTypeEnum[keyof typeof RemoveBookmarkedPostPostTypeEnum];
