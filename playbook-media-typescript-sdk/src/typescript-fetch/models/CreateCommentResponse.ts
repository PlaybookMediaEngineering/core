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
import type { PollPost } from './PollPost';
import {
    PollPostFromJSON,
    PollPostFromJSONTyped,
    PollPostToJSON,
} from './PollPost';
import type { Post } from './Post';
import {
    PostFromJSON,
    PostFromJSONTyped,
    PostToJSON,
} from './Post';
import type { SharedPost } from './SharedPost';
import {
    SharedPostFromJSON,
    SharedPostFromJSONTyped,
    SharedPostToJSON,
} from './SharedPost';

/**
 * 
 * @export
 * @interface CreateCommentResponse
 */
export interface CreateCommentResponse {
    /**
     * 
     * @type {Post}
     * @memberof CreateCommentResponse
     */
    regularPost?: Post;
    /**
     * 
     * @type {SharedPost}
     * @memberof CreateCommentResponse
     */
    sharedPost?: SharedPost;
    /**
     * 
     * @type {PollPost}
     * @memberof CreateCommentResponse
     */
    pollPost?: PollPost;
}

/**
 * Check if a given object implements the CreateCommentResponse interface.
 */
export function instanceOfCreateCommentResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateCommentResponseFromJSON(json: any): CreateCommentResponse {
    return CreateCommentResponseFromJSONTyped(json, false);
}

export function CreateCommentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCommentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'regularPost': !exists(json, 'regularPost') ? undefined : PostFromJSON(json['regularPost']),
        'sharedPost': !exists(json, 'sharedPost') ? undefined : SharedPostFromJSON(json['sharedPost']),
        'pollPost': !exists(json, 'pollPost') ? undefined : PollPostFromJSON(json['pollPost']),
    };
}

export function CreateCommentResponseToJSON(value?: CreateCommentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'regularPost': PostToJSON(value.regularPost),
        'sharedPost': SharedPostToJSON(value.sharedPost),
        'pollPost': PollPostToJSON(value.pollPost),
    };
}

