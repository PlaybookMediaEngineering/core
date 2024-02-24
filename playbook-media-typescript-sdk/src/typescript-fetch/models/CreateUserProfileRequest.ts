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
import type { UserTags } from './UserTags';
import {
    UserTagsFromJSON,
    UserTagsFromJSONTyped,
    UserTagsToJSON,
} from './UserTags';

/**
 * 
 * @export
 * @interface CreateUserProfileRequest
 */
export interface CreateUserProfileRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateUserProfileRequest
     */
    userId: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateUserProfileRequest
     */
    idsOfCommunitiesToFollow?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateUserProfileRequest
     */
    username: string;
    /**
     * 
     * @type {Array<UserTags>}
     * @memberof CreateUserProfileRequest
     */
    tags: Array<UserTags>;
    /**
     * 
     * @type {boolean}
     * @memberof CreateUserProfileRequest
     */
    isPrivate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateUserProfileRequest
     */
    profileImageUrl: string;
}

/**
 * Check if a given object implements the CreateUserProfileRequest interface.
 */
export function instanceOfCreateUserProfileRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "profileImageUrl" in value;

    return isInstance;
}

export function CreateUserProfileRequestFromJSON(json: any): CreateUserProfileRequest {
    return CreateUserProfileRequestFromJSONTyped(json, false);
}

export function CreateUserProfileRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserProfileRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'idsOfCommunitiesToFollow': !exists(json, 'idsOfCommunitiesToFollow') ? undefined : json['idsOfCommunitiesToFollow'],
        'username': json['username'],
        'tags': ((json['tags'] as Array<any>).map(UserTagsFromJSON)),
        'isPrivate': !exists(json, 'isPrivate') ? undefined : json['isPrivate'],
        'profileImageUrl': json['profileImageUrl'],
    };
}

export function CreateUserProfileRequestToJSON(value?: CreateUserProfileRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'idsOfCommunitiesToFollow': value.idsOfCommunitiesToFollow,
        'username': value.username,
        'tags': ((value.tags as Array<any>).map(UserTagsToJSON)),
        'isPrivate': value.isPrivate,
        'profileImageUrl': value.profileImageUrl,
    };
}

