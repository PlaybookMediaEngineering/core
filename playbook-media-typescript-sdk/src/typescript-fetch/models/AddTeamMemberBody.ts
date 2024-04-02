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
import type { PermissionType } from './PermissionType';
import {
    PermissionTypeFromJSON,
    PermissionTypeFromJSONTyped,
    PermissionTypeToJSON,
} from './PermissionType';

/**
 * 
 * @export
 * @interface AddTeamMemberBody
 */
export interface AddTeamMemberBody {
    /**
     * The user ID of the team administrator. This field is required.
     * @type {string}
     * @memberof AddTeamMemberBody
     */
    adminUserId: string;
    /**
     * The user ID of the member being added to the team. This field is required.
     * @type {string}
     * @memberof AddTeamMemberBody
     */
    memberUserId: string;
    /**
     * 
     * @type {PermissionType}
     * @memberof AddTeamMemberBody
     */
    memberPermissionType: PermissionType;
}

/**
 * Check if a given object implements the AddTeamMemberBody interface.
 */
export function instanceOfAddTeamMemberBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "adminUserId" in value;
    isInstance = isInstance && "memberUserId" in value;
    isInstance = isInstance && "memberPermissionType" in value;

    return isInstance;
}

export function AddTeamMemberBodyFromJSON(json: any): AddTeamMemberBody {
    return AddTeamMemberBodyFromJSONTyped(json, false);
}

export function AddTeamMemberBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddTeamMemberBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adminUserId': json['adminUserId'],
        'memberUserId': json['memberUserId'],
        'memberPermissionType': PermissionTypeFromJSON(json['memberPermissionType']),
    };
}

export function AddTeamMemberBodyToJSON(value?: AddTeamMemberBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adminUserId': value.adminUserId,
        'memberUserId': value.memberUserId,
        'memberPermissionType': PermissionTypeToJSON(value.memberPermissionType),
    };
}

