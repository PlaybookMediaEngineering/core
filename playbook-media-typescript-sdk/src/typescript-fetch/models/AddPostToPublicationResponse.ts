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
import type { Publication } from './Publication';
import {
    PublicationFromJSON,
    PublicationFromJSONTyped,
    PublicationToJSON,
} from './Publication';

/**
 * 
 * @export
 * @interface AddPostToPublicationResponse
 */
export interface AddPostToPublicationResponse {
    /**
     * 
     * @type {Publication}
     * @memberof AddPostToPublicationResponse
     */
    publication?: Publication;
}

/**
 * Check if a given object implements the AddPostToPublicationResponse interface.
 */
export function instanceOfAddPostToPublicationResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddPostToPublicationResponseFromJSON(json: any): AddPostToPublicationResponse {
    return AddPostToPublicationResponseFromJSONTyped(json, false);
}

export function AddPostToPublicationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddPostToPublicationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'publication': !exists(json, 'publication') ? undefined : PublicationFromJSON(json['publication']),
    };
}

export function AddPostToPublicationResponseToJSON(value?: AddPostToPublicationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'publication': PublicationToJSON(value.publication),
    };
}
