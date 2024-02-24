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
import type { Bookmark } from './Bookmark';
import {
    BookmarkFromJSON,
    BookmarkFromJSONTyped,
    BookmarkToJSON,
} from './Bookmark';

/**
 * 
 * @export
 * @interface BookmarkPostResponse
 */
export interface BookmarkPostResponse {
    /**
     * 
     * @type {Bookmark}
     * @memberof BookmarkPostResponse
     */
    bookmark?: Bookmark;
}

/**
 * Check if a given object implements the BookmarkPostResponse interface.
 */
export function instanceOfBookmarkPostResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BookmarkPostResponseFromJSON(json: any): BookmarkPostResponse {
    return BookmarkPostResponseFromJSONTyped(json, false);
}

export function BookmarkPostResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookmarkPostResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookmark': !exists(json, 'bookmark') ? undefined : BookmarkFromJSON(json['bookmark']),
    };
}

export function BookmarkPostResponseToJSON(value?: BookmarkPostResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookmark': BookmarkToJSON(value.bookmark),
    };
}

