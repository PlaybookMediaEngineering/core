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

import { exists, mapValues } from '../runtime';
import type { Post } from './Post';
import {
    PostFromJSON,
    PostFromJSONTyped,
    PostToJSON,
} from './Post';

/**
 * 
 * @export
 * @interface GetBookmarkedPostsResponse
 */
export interface GetBookmarkedPostsResponse {
    /**
     * 
     * @type {Array<Post>}
     * @memberof GetBookmarkedPostsResponse
     */
    posts?: Array<Post>;
}

/**
 * Check if a given object implements the GetBookmarkedPostsResponse interface.
 */
export function instanceOfGetBookmarkedPostsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetBookmarkedPostsResponseFromJSON(json: any): GetBookmarkedPostsResponse {
    return GetBookmarkedPostsResponseFromJSONTyped(json, false);
}

export function GetBookmarkedPostsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetBookmarkedPostsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'posts': !exists(json, 'posts') ? undefined : ((json['posts'] as Array<any>).map(PostFromJSON)),
    };
}

export function GetBookmarkedPostsResponseToJSON(value?: GetBookmarkedPostsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'posts': value.posts === undefined ? undefined : ((value.posts as Array<any>).map(PostToJSON)),
    };
}

