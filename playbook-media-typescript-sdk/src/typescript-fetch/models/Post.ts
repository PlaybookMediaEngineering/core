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
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
} from './Category';
import type { Comment } from './Comment';
import {
    CommentFromJSON,
    CommentFromJSONTyped,
    CommentToJSON,
} from './Comment';
import type { ContentInsights } from './ContentInsights';
import {
    ContentInsightsFromJSON,
    ContentInsightsFromJSONTyped,
    ContentInsightsToJSON,
} from './ContentInsights';
import type { Media } from './Media';
import {
    MediaFromJSON,
    MediaFromJSONTyped,
    MediaToJSON,
} from './Media';
import type { Note } from './Note';
import {
    NoteFromJSON,
    NoteFromJSONTyped,
    NoteToJSON,
} from './Note';
import type { PostPublishStatus } from './PostPublishStatus';
import {
    PostPublishStatusFromJSON,
    PostPublishStatusFromJSONTyped,
    PostPublishStatusToJSON,
} from './PostPublishStatus';
import type { PostType } from './PostType';
import {
    PostTypeFromJSON,
    PostTypeFromJSONTyped,
    PostTypeToJSON,
} from './PostType';
import type { Reaction } from './Reaction';
import {
    ReactionFromJSON,
    ReactionFromJSONTyped,
    ReactionToJSON,
} from './Reaction';
import type { Thread } from './Thread';
import {
    ThreadFromJSON,
    ThreadFromJSONTyped,
    ThreadToJSON,
} from './Thread';
import type { ThreadParticipantType } from './ThreadParticipantType';
import {
    ThreadParticipantTypeFromJSON,
    ThreadParticipantTypeFromJSONTyped,
    ThreadParticipantTypeToJSON,
} from './ThreadParticipantType';

/**
 * 
 * @export
 * @interface Post
 */
export interface Post {
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    createdAt?: string;
    /**
     * 
     * @type {PostType}
     * @memberof Post
     */
    action: PostType;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    content: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Post
     */
    mentions?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Post
     */
    hashtags?: Array<string>;
    /**
     * 
     * @type {Media}
     * @memberof Post
     */
    media?: Media;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Post
     */
    extra?: { [key: string]: string; };
    /**
     * 
     * @type {Array<Comment>}
     * @memberof Post
     */
    comments?: Array<Comment>;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    backendPlatformUserId?: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    profileId?: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    title?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Post
     */
    tags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    topicName?: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    authorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    authorProfileImage?: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    affinityScore?: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    qualityScore?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Post
     */
    userIdToAffinityScoreMap?: { [key: string]: string; };
    /**
     * 
     * @type {ContentInsights}
     * @memberof Post
     */
    insights?: ContentInsights;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Post
     */
    userIdToReportsMap?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    readingTime?: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    backgroundImageUrl?: string;
    /**
     * 
     * @type {AccountType}
     * @memberof Post
     */
    authorAccountType?: AccountType;
    /**
     * 
     * @type {Array<Note>}
     * @memberof Post
     */
    notes?: Array<Note>;
    /**
     * 
     * @type {Thread}
     * @memberof Post
     */
    thread?: Thread;
    /**
     * 
     * @type {ThreadParticipantType}
     * @memberof Post
     */
    threadParticipantType?: ThreadParticipantType;
    /**
     * 
     * @type {{ [key: string]: Reaction; }}
     * @memberof Post
     */
    userIdToReactionMap?: { [key: string]: Reaction; };
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    aiGeneratedQuestionResponse?: string;
    /**
     * 
     * @type {Category}
     * @memberof Post
     */
    category?: Category;
    /**
     * 
     * @type {PostPublishStatus}
     * @memberof Post
     */
    publishStatus?: PostPublishStatus;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    threePointSummary: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    backgroundContext: string;
}

/**
 * Check if a given object implements the Post interface.
 */
export function instanceOfPost(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "content" in value;
    isInstance = isInstance && "threePointSummary" in value;
    isInstance = isInstance && "backgroundContext" in value;

    return isInstance;
}

export function PostFromJSON(json: any): Post {
    return PostFromJSONTyped(json, false);
}

export function PostFromJSONTyped(json: any, ignoreDiscriminator: boolean): Post {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'action': PostTypeFromJSON(json['action']),
        'content': json['content'],
        'mentions': !exists(json, 'mentions') ? undefined : json['mentions'],
        'hashtags': !exists(json, 'hashtags') ? undefined : json['hashtags'],
        'media': !exists(json, 'media') ? undefined : MediaFromJSON(json['media']),
        'extra': !exists(json, 'extra') ? undefined : json['extra'],
        'comments': !exists(json, 'comments') ? undefined : ((json['comments'] as Array<any>).map(CommentFromJSON)),
        'backendPlatformUserId': !exists(json, 'backendPlatformUserId') ? undefined : json['backendPlatformUserId'],
        'profileId': !exists(json, 'profileId') ? undefined : json['profileId'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'topicName': !exists(json, 'topicName') ? undefined : json['topicName'],
        'authorUsername': !exists(json, 'authorUsername') ? undefined : json['authorUsername'],
        'authorProfileImage': !exists(json, 'authorProfileImage') ? undefined : json['authorProfileImage'],
        'affinityScore': !exists(json, 'affinityScore') ? undefined : json['affinityScore'],
        'qualityScore': !exists(json, 'qualityScore') ? undefined : json['qualityScore'],
        'userIdToAffinityScoreMap': !exists(json, 'userIdToAffinityScoreMap') ? undefined : json['userIdToAffinityScoreMap'],
        'insights': !exists(json, 'insights') ? undefined : ContentInsightsFromJSON(json['insights']),
        'userIdToReportsMap': !exists(json, 'userIdToReportsMap') ? undefined : json['userIdToReportsMap'],
        'readingTime': !exists(json, 'readingTime') ? undefined : json['readingTime'],
        'backgroundImageUrl': !exists(json, 'backgroundImageUrl') ? undefined : json['backgroundImageUrl'],
        'authorAccountType': !exists(json, 'authorAccountType') ? undefined : AccountTypeFromJSON(json['authorAccountType']),
        'notes': !exists(json, 'notes') ? undefined : ((json['notes'] as Array<any>).map(NoteFromJSON)),
        'thread': !exists(json, 'thread') ? undefined : ThreadFromJSON(json['thread']),
        'threadParticipantType': !exists(json, 'threadParticipantType') ? undefined : ThreadParticipantTypeFromJSON(json['threadParticipantType']),
        'userIdToReactionMap': !exists(json, 'userIdToReactionMap') ? undefined : (mapValues(json['userIdToReactionMap'], ReactionFromJSON)),
        'aiGeneratedQuestionResponse': !exists(json, 'aiGeneratedQuestionResponse') ? undefined : json['aiGeneratedQuestionResponse'],
        'category': !exists(json, 'category') ? undefined : CategoryFromJSON(json['category']),
        'publishStatus': !exists(json, 'publishStatus') ? undefined : PostPublishStatusFromJSON(json['publishStatus']),
        'threePointSummary': json['threePointSummary'],
        'backgroundContext': json['backgroundContext'],
    };
}

export function PostToJSON(value?: Post | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': value.createdAt,
        'action': PostTypeToJSON(value.action),
        'content': value.content,
        'mentions': value.mentions,
        'hashtags': value.hashtags,
        'media': MediaToJSON(value.media),
        'extra': value.extra,
        'comments': value.comments === undefined ? undefined : ((value.comments as Array<any>).map(CommentToJSON)),
        'backendPlatformUserId': value.backendPlatformUserId,
        'profileId': value.profileId,
        'title': value.title,
        'tags': value.tags,
        'topicName': value.topicName,
        'authorUsername': value.authorUsername,
        'authorProfileImage': value.authorProfileImage,
        'affinityScore': value.affinityScore,
        'qualityScore': value.qualityScore,
        'userIdToAffinityScoreMap': value.userIdToAffinityScoreMap,
        'insights': ContentInsightsToJSON(value.insights),
        'userIdToReportsMap': value.userIdToReportsMap,
        'readingTime': value.readingTime,
        'backgroundImageUrl': value.backgroundImageUrl,
        'authorAccountType': AccountTypeToJSON(value.authorAccountType),
        'notes': value.notes === undefined ? undefined : ((value.notes as Array<any>).map(NoteToJSON)),
        'thread': ThreadToJSON(value.thread),
        'threadParticipantType': ThreadParticipantTypeToJSON(value.threadParticipantType),
        'userIdToReactionMap': value.userIdToReactionMap === undefined ? undefined : (mapValues(value.userIdToReactionMap, ReactionToJSON)),
        'aiGeneratedQuestionResponse': value.aiGeneratedQuestionResponse,
        'category': CategoryToJSON(value.category),
        'publishStatus': PostPublishStatusToJSON(value.publishStatus),
        'threePointSummary': value.threePointSummary,
        'backgroundContext': value.backgroundContext,
    };
}

