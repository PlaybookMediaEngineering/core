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
 * @interface EditCommunityProfileRequest
 */
export interface EditCommunityProfileRequest {
    /**
     * 
     * @type {CommunityProfile}
     * @memberof EditCommunityProfileRequest
     */
    profile: CommunityProfile;
    /**
     * 
     * @type {string}
     * @memberof EditCommunityProfileRequest
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof EditCommunityProfileRequest
     */
    communityProfileId: string;
}

/**
 * Check if a given object implements the EditCommunityProfileRequest interface.
 */
export function instanceOfEditCommunityProfileRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "profile" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "communityProfileId" in value;

    return isInstance;
}

export function EditCommunityProfileRequestFromJSON(json: any): EditCommunityProfileRequest {
    return EditCommunityProfileRequestFromJSONTyped(json, false);
}

export function EditCommunityProfileRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditCommunityProfileRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profile': CommunityProfileFromJSON(json['profile']),
        'userId': json['userId'],
        'communityProfileId': json['communityProfileId'],
    };
}

export function EditCommunityProfileRequestToJSON(value?: EditCommunityProfileRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profile': CommunityProfileToJSON(value.profile),
        'userId': value.userId,
        'communityProfileId': value.communityProfileId,
    };
}

