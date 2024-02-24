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
 * @interface RemoveBookmarkedPublicationResponse
 */
export interface RemoveBookmarkedPublicationResponse {
    /**
     * 
     * @type {Bookmark}
     * @memberof RemoveBookmarkedPublicationResponse
     */
    bookmark?: Bookmark;
}

/**
 * Check if a given object implements the RemoveBookmarkedPublicationResponse interface.
 */
export function instanceOfRemoveBookmarkedPublicationResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RemoveBookmarkedPublicationResponseFromJSON(json: any): RemoveBookmarkedPublicationResponse {
    return RemoveBookmarkedPublicationResponseFromJSONTyped(json, false);
}

export function RemoveBookmarkedPublicationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoveBookmarkedPublicationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookmark': !exists(json, 'bookmark') ? undefined : BookmarkFromJSON(json['bookmark']),
    };
}

export function RemoveBookmarkedPublicationResponseToJSON(value?: RemoveBookmarkedPublicationResponse | null): any {
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

