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
 * @interface BookmarkPublicationResponse
 */
export interface BookmarkPublicationResponse {
    /**
     * 
     * @type {Bookmark}
     * @memberof BookmarkPublicationResponse
     */
    bookmark?: Bookmark;
}

/**
 * Check if a given object implements the BookmarkPublicationResponse interface.
 */
export function instanceOfBookmarkPublicationResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BookmarkPublicationResponseFromJSON(json: any): BookmarkPublicationResponse {
    return BookmarkPublicationResponseFromJSONTyped(json, false);
}

export function BookmarkPublicationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookmarkPublicationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookmark': !exists(json, 'bookmark') ? undefined : BookmarkFromJSON(json['bookmark']),
    };
}

export function BookmarkPublicationResponseToJSON(value?: BookmarkPublicationResponse | null): any {
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

