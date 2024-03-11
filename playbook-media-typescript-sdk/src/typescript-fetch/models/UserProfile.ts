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
import type { Bookmark } from './Bookmark';
import {
    BookmarkFromJSON,
    BookmarkFromJSONTyped,
    BookmarkToJSON,
} from './Bookmark';
import type { UserTags } from './UserTags';
import {
    UserTagsFromJSON,
    UserTagsFromJSONTyped,
    UserTagsToJSON,
} from './UserTags';

/**
 * 
 * @export
 * @interface UserProfile
 */
export interface UserProfile {
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    id?: string;
    /**
     * 
     * @type {Array<UserTags>}
     * @memberof UserProfile
     */
    tags: Array<UserTags>;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserProfile
     */
    _private: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    followers: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    following: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    notificationFeedTimelineId: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    personalFeedTimelineId: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    newsFeedTimelineId: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    profileImageUrl: string;
    /**
     * 
     * @type {Bookmark}
     * @memberof UserProfile
     */
    bookmarks: Bookmark;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    algoliaId: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    paidFeedTimelineId: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    freeFeedTimelineId: string;
}

/**
 * Check if a given object implements the UserProfile interface.
 */
export function instanceOfUserProfile(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "_private" in value;
    isInstance = isInstance && "followers" in value;
    isInstance = isInstance && "following" in value;
    isInstance = isInstance && "notificationFeedTimelineId" in value;
    isInstance = isInstance && "personalFeedTimelineId" in value;
    isInstance = isInstance && "newsFeedTimelineId" in value;
    isInstance = isInstance && "profileImageUrl" in value;
    isInstance = isInstance && "bookmarks" in value;
    isInstance = isInstance && "algoliaId" in value;
    isInstance = isInstance && "paidFeedTimelineId" in value;
    isInstance = isInstance && "freeFeedTimelineId" in value;

    return isInstance;
}

export function UserProfileFromJSON(json: any): UserProfile {
    return UserProfileFromJSONTyped(json, false);
}

export function UserProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'tags': ((json['tags'] as Array<any>).map(UserTagsFromJSON)),
        'name': json['name'],
        '_private': json['private'],
        'followers': json['followers'],
        'following': json['following'],
        'notificationFeedTimelineId': json['notificationFeedTimelineId'],
        'personalFeedTimelineId': json['personalFeedTimelineId'],
        'newsFeedTimelineId': json['newsFeedTimelineId'],
        'profileImageUrl': json['profileImageUrl'],
        'bookmarks': BookmarkFromJSON(json['bookmarks']),
        'algoliaId': json['algoliaId'],
        'paidFeedTimelineId': json['paidFeedTimelineId'],
        'freeFeedTimelineId': json['freeFeedTimelineId'],
    };
}

export function UserProfileToJSON(value?: UserProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'tags': ((value.tags as Array<any>).map(UserTagsToJSON)),
        'name': value.name,
        'private': value._private,
        'followers': value.followers,
        'following': value.following,
        'notificationFeedTimelineId': value.notificationFeedTimelineId,
        'personalFeedTimelineId': value.personalFeedTimelineId,
        'newsFeedTimelineId': value.newsFeedTimelineId,
        'profileImageUrl': value.profileImageUrl,
        'bookmarks': BookmarkToJSON(value.bookmarks),
        'algoliaId': value.algoliaId,
        'paidFeedTimelineId': value.paidFeedTimelineId,
        'freeFeedTimelineId': value.freeFeedTimelineId,
    };
}
