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

/**
 * 
 * @export
 * @interface RespondToPollResponse
 */
export interface RespondToPollResponse {
    /**
     * 
     * @type {PollPost}
     * @memberof RespondToPollResponse
     */
    poll?: PollPost;
}

/**
 * Check if a given object implements the RespondToPollResponse interface.
 */
export function instanceOfRespondToPollResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RespondToPollResponseFromJSON(json: any): RespondToPollResponse {
    return RespondToPollResponseFromJSONTyped(json, false);
}

export function RespondToPollResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespondToPollResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'poll': !exists(json, 'poll') ? undefined : PollPostFromJSON(json['poll']),
    };
}

export function RespondToPollResponseToJSON(value?: RespondToPollResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'poll': PollPostToJSON(value.poll),
    };
}
