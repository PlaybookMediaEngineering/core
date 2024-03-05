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
/**
 * 
 * @export
 * @interface Thread
 */
export interface Thread {
    /**
     * 
     * @type {string}
     * @memberof Thread
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Thread
     */
    postIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Thread
     */
    parentPostId?: string;
    /**
     * 
     * @type {string}
     * @memberof Thread
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Thread
     */
    updatedAt?: string;
}

/**
 * Check if a given object implements the Thread interface.
 */
export function instanceOfThread(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ThreadFromJSON(json: any): Thread {
    return ThreadFromJSONTyped(json, false);
}

export function ThreadFromJSONTyped(json: any, ignoreDiscriminator: boolean): Thread {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'postIds': !exists(json, 'postIds') ? undefined : json['postIds'],
        'parentPostId': !exists(json, 'parentPostId') ? undefined : json['parentPostId'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
    };
}

export function ThreadToJSON(value?: Thread | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'postIds': value.postIds,
        'parentPostId': value.parentPostId,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
    };
}
