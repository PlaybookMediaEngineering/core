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
 * @interface GetBlogPostsByTagResponse
 */
export interface GetBlogPostsByTagResponse {
    /**
     * 
     * @type {Array<Post>}
     * @memberof GetBlogPostsByTagResponse
     */
    posts?: Array<Post>;
}

/**
 * Check if a given object implements the GetBlogPostsByTagResponse interface.
 */
export function instanceOfGetBlogPostsByTagResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetBlogPostsByTagResponseFromJSON(json: any): GetBlogPostsByTagResponse {
    return GetBlogPostsByTagResponseFromJSONTyped(json, false);
}

export function GetBlogPostsByTagResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetBlogPostsByTagResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'posts': !exists(json, 'posts') ? undefined : ((json['posts'] as Array<any>).map(PostFromJSON)),
    };
}

export function GetBlogPostsByTagResponseToJSON(value?: GetBlogPostsByTagResponse | null): any {
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

