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
import type { CommunityProfile } from './CommunityProfile';
import {
    CommunityProfileFromJSON,
    CommunityProfileFromJSONTyped,
    CommunityProfileToJSON,
} from './CommunityProfile';

/**
 * 
 * @export
 * @interface GetCommunityProfilesResponse
 */
export interface GetCommunityProfilesResponse {
    /**
     * 
     * @type {number}
     * @memberof GetCommunityProfilesResponse
     */
    nextPageNumber?: number;
    /**
     * 
     * @type {Array<CommunityProfile>}
     * @memberof GetCommunityProfilesResponse
     */
    profiles?: Array<CommunityProfile>;
}

/**
 * Check if a given object implements the GetCommunityProfilesResponse interface.
 */
export function instanceOfGetCommunityProfilesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCommunityProfilesResponseFromJSON(json: any): GetCommunityProfilesResponse {
    return GetCommunityProfilesResponseFromJSONTyped(json, false);
}

export function GetCommunityProfilesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCommunityProfilesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nextPageNumber': !exists(json, 'nextPageNumber') ? undefined : json['nextPageNumber'],
        'profiles': !exists(json, 'profiles') ? undefined : ((json['profiles'] as Array<any>).map(CommunityProfileFromJSON)),
    };
}

export function GetCommunityProfilesResponseToJSON(value?: GetCommunityProfilesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nextPageNumber': value.nextPageNumber,
        'profiles': value.profiles === undefined ? undefined : ((value.profiles as Array<any>).map(CommunityProfileToJSON)),
    };
}

