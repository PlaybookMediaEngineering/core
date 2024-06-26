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

/**
 * 
 * @export
 * @interface ReactToCommentReplyResponse
 */
export interface ReactToCommentReplyResponse {
    /**
     * 
     * @type {CommentReply}
     * @memberof ReactToCommentReplyResponse
     */
    reply?: CommentReply;
}

/**
 * Check if a given object implements the ReactToCommentReplyResponse interface.
 */
export function instanceOfReactToCommentReplyResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReactToCommentReplyResponseFromJSON(json: any): ReactToCommentReplyResponse {
    return ReactToCommentReplyResponseFromJSONTyped(json, false);
}

export function ReactToCommentReplyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReactToCommentReplyResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reply': !exists(json, 'reply') ? undefined : CommentReplyFromJSON(json['reply']),
    };
}

export function ReactToCommentReplyResponseToJSON(value?: ReactToCommentReplyResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reply': CommentReplyToJSON(value.reply),
    };
}

