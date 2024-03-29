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
 * @interface FollowCommunityProfileResponse
 */
export interface FollowCommunityProfileResponse {
    /**
     * 
     * @type {boolean}
     * @memberof FollowCommunityProfileResponse
     */
    success?: boolean;
}

/**
 * Check if a given object implements the FollowCommunityProfileResponse interface.
 */
export function instanceOfFollowCommunityProfileResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FollowCommunityProfileResponseFromJSON(json: any): FollowCommunityProfileResponse {
    return FollowCommunityProfileResponseFromJSONTyped(json, false);
}

export function FollowCommunityProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FollowCommunityProfileResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function FollowCommunityProfileResponseToJSON(value?: FollowCommunityProfileResponse | null): any {
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

