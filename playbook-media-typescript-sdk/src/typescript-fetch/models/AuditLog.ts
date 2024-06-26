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
import type { ActionType } from './ActionType';
import {
    ActionTypeFromJSON,
    ActionTypeFromJSONTyped,
    ActionTypeToJSON,
} from './ActionType';

/**
 * 
 * @export
 * @interface AuditLog
 */
export interface AuditLog {
    /**
     * 
     * @type {string}
     * @memberof AuditLog
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLog
     */
    actionName?: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLog
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLog
     */
    timestamp?: string;
    /**
     * 
     * @type {ActionType}
     * @memberof AuditLog
     */
    actionType?: ActionType;
}

/**
 * Check if a given object implements the AuditLog interface.
 */
export function instanceOfAuditLog(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuditLogFromJSON(json: any): AuditLog {
    return AuditLogFromJSONTyped(json, false);
}

export function AuditLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditLog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'actionName': !exists(json, 'actionName') ? undefined : json['actionName'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'actionType': !exists(json, 'actionType') ? undefined : ActionTypeFromJSON(json['actionType']),
    };
}

export function AuditLogToJSON(value?: AuditLog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'actionName': value.actionName,
        'userId': value.userId,
        'timestamp': value.timestamp,
        'actionType': ActionTypeToJSON(value.actionType),
    };
}

