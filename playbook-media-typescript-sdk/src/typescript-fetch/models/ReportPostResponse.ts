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
 * @interface ReportPostResponse
 */
export interface ReportPostResponse {
    /**
     * 
     * @type {Post}
     * @memberof ReportPostResponse
     */
    post?: Post;
}

/**
 * Check if a given object implements the ReportPostResponse interface.
 */
export function instanceOfReportPostResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportPostResponseFromJSON(json: any): ReportPostResponse {
    return ReportPostResponseFromJSONTyped(json, false);
}

export function ReportPostResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportPostResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'post': !exists(json, 'post') ? undefined : PostFromJSON(json['post']),
    };
}

export function ReportPostResponseToJSON(value?: ReportPostResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'post': PostToJSON(value.post),
    };
}

