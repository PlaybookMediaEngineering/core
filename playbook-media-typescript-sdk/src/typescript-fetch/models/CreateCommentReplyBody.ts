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
import type { CommentReply } from './CommentReply';
import {
    CommentReplyFromJSON,
    CommentReplyFromJSONTyped,
    CommentReplyToJSON,
} from './CommentReply';
import type { PostType } from './PostType';
import {
    PostTypeFromJSON,
    PostTypeFromJSONTyped,
    PostTypeToJSON,
} from './PostType';

/**
 * 
 * @export
 * @interface CreateCommentReplyBody
 */
export interface CreateCommentReplyBody {
    /**
     * 
     * @type {CommentReply}
     * @memberof CreateCommentReplyBody
     */
    reply?: CommentReply;
    /**
     * 
     * @type {PostType}
     * @memberof CreateCommentReplyBody
     */
    postType: PostType;
}

/**
 * Check if a given object implements the CreateCommentReplyBody interface.
 */
export function instanceOfCreateCommentReplyBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "postType" in value;

    return isInstance;
}

export function CreateCommentReplyBodyFromJSON(json: any): CreateCommentReplyBody {
    return CreateCommentReplyBodyFromJSONTyped(json, false);
}

export function CreateCommentReplyBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCommentReplyBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reply': !exists(json, 'reply') ? undefined : CommentReplyFromJSON(json['reply']),
        'postType': PostTypeFromJSON(json['postType']),
    };
}

export function CreateCommentReplyBodyToJSON(value?: CreateCommentReplyBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reply': CommentReplyToJSON(value.reply),
        'postType': PostTypeToJSON(value.postType),
    };
}
