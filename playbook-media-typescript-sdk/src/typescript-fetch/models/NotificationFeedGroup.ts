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
import type { NotificationActivity } from './NotificationActivity';
import {
    NotificationActivityFromJSON,
    NotificationActivityFromJSONTyped,
    NotificationActivityToJSON,
} from './NotificationActivity';

/**
 * 
 * @export
 * @interface NotificationFeedGroup
 */
export interface NotificationFeedGroup {
    /**
     * 
     * @type {string}
     * @memberof NotificationFeedGroup
     */
    activityCount?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationFeedGroup
     */
    actorCount?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationFeedGroup
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationFeedGroup
     */
    group?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationFeedGroup
     */
    feedGroupId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationFeedGroup
     */
    isRead?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationFeedGroup
     */
    isSeen?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NotificationFeedGroup
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationFeedGroup
     */
    verb?: string;
    /**
     * 
     * @type {Array<NotificationActivity>}
     * @memberof NotificationFeedGroup
     */
    activities?: Array<NotificationActivity>;
}

/**
 * Check if a given object implements the NotificationFeedGroup interface.
 */
export function instanceOfNotificationFeedGroup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NotificationFeedGroupFromJSON(json: any): NotificationFeedGroup {
    return NotificationFeedGroupFromJSONTyped(json, false);
}

export function NotificationFeedGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationFeedGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activityCount': !exists(json, 'activityCount') ? undefined : json['activityCount'],
        'actorCount': !exists(json, 'actorCount') ? undefined : json['actorCount'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'group': !exists(json, 'group') ? undefined : json['group'],
        'feedGroupId': !exists(json, 'feedGroupId') ? undefined : json['feedGroupId'],
        'isRead': !exists(json, 'isRead') ? undefined : json['isRead'],
        'isSeen': !exists(json, 'isSeen') ? undefined : json['isSeen'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'verb': !exists(json, 'verb') ? undefined : json['verb'],
        'activities': !exists(json, 'activities') ? undefined : ((json['activities'] as Array<any>).map(NotificationActivityFromJSON)),
    };
}

export function NotificationFeedGroupToJSON(value?: NotificationFeedGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activityCount': value.activityCount,
        'actorCount': value.actorCount,
        'createdAt': value.createdAt,
        'group': value.group,
        'feedGroupId': value.feedGroupId,
        'isRead': value.isRead,
        'isSeen': value.isSeen,
        'updatedAt': value.updatedAt,
        'verb': value.verb,
        'activities': value.activities === undefined ? undefined : ((value.activities as Array<any>).map(NotificationActivityToJSON)),
    };
}

