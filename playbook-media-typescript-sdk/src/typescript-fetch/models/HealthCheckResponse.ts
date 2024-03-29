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
 * @interface HealthCheckResponse
 */
export interface HealthCheckResponse {
    /**
     * 
     * @type {boolean}
     * @memberof HealthCheckResponse
     */
    healthy?: boolean;
}

/**
 * Check if a given object implements the HealthCheckResponse interface.
 */
export function instanceOfHealthCheckResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HealthCheckResponseFromJSON(json: any): HealthCheckResponse {
    return HealthCheckResponseFromJSONTyped(json, false);
}

export function HealthCheckResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthCheckResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'healthy': !exists(json, 'healthy') ? undefined : json['healthy'],
    };
}

export function HealthCheckResponseToJSON(value?: HealthCheckResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'healthy': value.healthy,
    };
}

