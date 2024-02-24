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
 * @interface DeletePublicationResponse
 */
export interface DeletePublicationResponse {
    /**
     * 
     * @type {boolean}
     * @memberof DeletePublicationResponse
     */
    success?: boolean;
}

/**
 * Check if a given object implements the DeletePublicationResponse interface.
 */
export function instanceOfDeletePublicationResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeletePublicationResponseFromJSON(json: any): DeletePublicationResponse {
    return DeletePublicationResponseFromJSONTyped(json, false);
}

export function DeletePublicationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeletePublicationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function DeletePublicationResponseToJSON(value?: DeletePublicationResponse | null): any {
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

