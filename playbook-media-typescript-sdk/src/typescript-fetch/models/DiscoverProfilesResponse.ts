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
import type { Topic } from './Topic';
import {
    TopicFromJSON,
    TopicFromJSONTyped,
    TopicToJSON,
} from './Topic';
import type { UserProfile } from './UserProfile';
import {
    UserProfileFromJSON,
    UserProfileFromJSONTyped,
    UserProfileToJSON,
} from './UserProfile';

/**
 * 
 * @export
 * @interface DiscoverProfilesResponse
 */
export interface DiscoverProfilesResponse {
    /**
     * 
     * @type {Array<CommunityProfile>}
     * @memberof DiscoverProfilesResponse
     */
    communityProfiles?: Array<CommunityProfile>;
    /**
     * 
     * @type {Array<UserProfile>}
     * @memberof DiscoverProfilesResponse
     */
    userProfiles?: Array<UserProfile>;
    /**
     * 
     * @type {Array<Topic>}
     * @memberof DiscoverProfilesResponse
     */
    topics?: Array<Topic>;
}

/**
 * Check if a given object implements the DiscoverProfilesResponse interface.
 */
export function instanceOfDiscoverProfilesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiscoverProfilesResponseFromJSON(json: any): DiscoverProfilesResponse {
    return DiscoverProfilesResponseFromJSONTyped(json, false);
}

export function DiscoverProfilesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoverProfilesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'communityProfiles': !exists(json, 'communityProfiles') ? undefined : ((json['communityProfiles'] as Array<any>).map(CommunityProfileFromJSON)),
        'userProfiles': !exists(json, 'userProfiles') ? undefined : ((json['userProfiles'] as Array<any>).map(UserProfileFromJSON)),
        'topics': !exists(json, 'topics') ? undefined : ((json['topics'] as Array<any>).map(TopicFromJSON)),
    };
}

export function DiscoverProfilesResponseToJSON(value?: DiscoverProfilesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'communityProfiles': value.communityProfiles === undefined ? undefined : ((value.communityProfiles as Array<any>).map(CommunityProfileToJSON)),
        'userProfiles': value.userProfiles === undefined ? undefined : ((value.userProfiles as Array<any>).map(UserProfileToJSON)),
        'topics': value.topics === undefined ? undefined : ((value.topics as Array<any>).map(TopicToJSON)),
    };
}

