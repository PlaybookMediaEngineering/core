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
 * @interface AcceptFollowProfileResponse
 */
export interface AcceptFollowProfileResponse {
    /**
     * 
     * @type {boolean}
     * @memberof AcceptFollowProfileResponse
     */
    success?: boolean;
}

/**
 * Check if a given object implements the AcceptFollowProfileResponse interface.
 */
export function instanceOfAcceptFollowProfileResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AcceptFollowProfileResponseFromJSON(json: any): AcceptFollowProfileResponse {
    return AcceptFollowProfileResponseFromJSONTyped(json, false);
}

export function AcceptFollowProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AcceptFollowProfileResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function AcceptFollowProfileResponseToJSON(value?: AcceptFollowProfileResponse | null): any {
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

