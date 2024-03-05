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
import type { UserProfile } from './UserProfile';
import {
    UserProfileFromJSON,
    UserProfileFromJSONTyped,
    UserProfileToJSON,
} from './UserProfile';

/**
 * 
 * @export
 * @interface GetUserProfilesResponse
 */
export interface GetUserProfilesResponse {
    /**
     * 
     * @type {number}
     * @memberof GetUserProfilesResponse
     */
    nextPageNumber?: number;
    /**
     * 
     * @type {Array<UserProfile>}
     * @memberof GetUserProfilesResponse
     */
    profiles?: Array<UserProfile>;
}

/**
 * Check if a given object implements the GetUserProfilesResponse interface.
 */
export function instanceOfGetUserProfilesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetUserProfilesResponseFromJSON(json: any): GetUserProfilesResponse {
    return GetUserProfilesResponseFromJSONTyped(json, false);
}

export function GetUserProfilesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUserProfilesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nextPageNumber': !exists(json, 'nextPageNumber') ? undefined : json['nextPageNumber'],
        'profiles': !exists(json, 'profiles') ? undefined : ((json['profiles'] as Array<any>).map(UserProfileFromJSON)),
    };
}

export function GetUserProfilesResponseToJSON(value?: GetUserProfilesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nextPageNumber': value.nextPageNumber,
        'profiles': value.profiles === undefined ? undefined : ((value.profiles as Array<any>).map(UserProfileToJSON)),
    };
}
