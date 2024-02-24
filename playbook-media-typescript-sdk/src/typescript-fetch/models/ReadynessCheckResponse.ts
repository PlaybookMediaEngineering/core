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
 * @interface ReadynessCheckResponse
 */
export interface ReadynessCheckResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ReadynessCheckResponse
     */
    ready?: boolean;
}

/**
 * Check if a given object implements the ReadynessCheckResponse interface.
 */
export function instanceOfReadynessCheckResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReadynessCheckResponseFromJSON(json: any): ReadynessCheckResponse {
    return ReadynessCheckResponseFromJSONTyped(json, false);
}

export function ReadynessCheckResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadynessCheckResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ready': !exists(json, 'ready') ? undefined : json['ready'],
    };
}

export function ReadynessCheckResponseToJSON(value?: ReadynessCheckResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ready': value.ready,
    };
}

