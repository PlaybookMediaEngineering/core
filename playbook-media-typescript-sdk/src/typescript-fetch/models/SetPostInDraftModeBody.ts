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
/**
 * 
 * @export
 * @interface SetPostInDraftModeBody
 */
export interface SetPostInDraftModeBody {
    /**
     * 
     * @type {string}
     * @memberof SetPostInDraftModeBody
     */
    postId: string;
}

/**
 * Check if a given object implements the SetPostInDraftModeBody interface.
 */
export function instanceOfSetPostInDraftModeBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "postId" in value;

    return isInstance;
}

export function SetPostInDraftModeBodyFromJSON(json: any): SetPostInDraftModeBody {
    return SetPostInDraftModeBodyFromJSONTyped(json, false);
}

export function SetPostInDraftModeBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetPostInDraftModeBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'postId': json['postId'],
    };
}

export function SetPostInDraftModeBodyToJSON(value?: SetPostInDraftModeBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'postId': value.postId,
    };
}
