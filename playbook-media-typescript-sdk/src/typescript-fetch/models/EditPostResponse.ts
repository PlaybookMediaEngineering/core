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
 * @interface EditPostResponse
 */
export interface EditPostResponse {
    /**
     * 
     * @type {boolean}
     * @memberof EditPostResponse
     */
    success?: boolean;
}

/**
 * Check if a given object implements the EditPostResponse interface.
 */
export function instanceOfEditPostResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EditPostResponseFromJSON(json: any): EditPostResponse {
    return EditPostResponseFromJSONTyped(json, false);
}

export function EditPostResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditPostResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function EditPostResponseToJSON(value?: EditPostResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
    };
}

