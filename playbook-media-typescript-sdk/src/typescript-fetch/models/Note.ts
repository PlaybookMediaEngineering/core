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
import type { AccountType } from './AccountType';
import {
    AccountTypeFromJSON,
    AccountTypeFromJSONTyped,
    AccountTypeToJSON,
} from './AccountType';
import type { Media } from './Media';
import {
    MediaFromJSON,
    MediaFromJSONTyped,
    MediaToJSON,
} from './Media';

/**
 * 
 * @export
 * @interface Note
 */
export interface Note {
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    backendPlatformUserId?: string;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    profileId?: string;
    /**
     * 
     * @type {Media}
     * @memberof Note
     */
    media?: Media;
    /**
     * 
     * @type {Array<string>}
     * @memberof Note
     */
    mentions?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Note
     */
    hashtags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    content: string;
    /**
     * 
     * @type {AccountType}
     * @memberof Note
     */
    authorAccountType?: AccountType;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    authorUserName: string;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    authorProfileImage: string;
}

/**
 * Check if a given object implements the Note interface.
 */
export function instanceOfNote(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "content" in value;
    isInstance = isInstance && "authorUserName" in value;
    isInstance = isInstance && "authorProfileImage" in value;

    return isInstance;
}

export function NoteFromJSON(json: any): Note {
    return NoteFromJSONTyped(json, false);
}

export function NoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Note {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'backendPlatformUserId': !exists(json, 'backendPlatformUserId') ? undefined : json['backendPlatformUserId'],
        'profileId': !exists(json, 'profileId') ? undefined : json['profileId'],
        'media': !exists(json, 'media') ? undefined : MediaFromJSON(json['media']),
        'mentions': !exists(json, 'mentions') ? undefined : json['mentions'],
        'hashtags': !exists(json, 'hashtags') ? undefined : json['hashtags'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'content': json['content'],
        'authorAccountType': !exists(json, 'authorAccountType') ? undefined : AccountTypeFromJSON(json['authorAccountType']),
        'authorUserName': json['authorUserName'],
        'authorProfileImage': json['authorProfileImage'],
    };
}

export function NoteToJSON(value?: Note | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'backendPlatformUserId': value.backendPlatformUserId,
        'profileId': value.profileId,
        'media': MediaToJSON(value.media),
        'mentions': value.mentions,
        'hashtags': value.hashtags,
        'createdAt': value.createdAt,
        'content': value.content,
        'authorAccountType': AccountTypeToJSON(value.authorAccountType),
        'authorUserName': value.authorUserName,
        'authorProfileImage': value.authorProfileImage,
    };
}

