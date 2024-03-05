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
 * @interface DeleteUserProfileResponse
 */
export interface DeleteUserProfileResponse {
    /**
     * 
     * @type {boolean}
     * @memberof DeleteUserProfileResponse
     */
    success?: boolean;
}

/**
 * Check if a given object implements the DeleteUserProfileResponse interface.
 */
export function instanceOfDeleteUserProfileResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteUserProfileResponseFromJSON(json: any): DeleteUserProfileResponse {
    return DeleteUserProfileResponseFromJSONTyped(json, false);
}

export function DeleteUserProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteUserProfileResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function DeleteUserProfileResponseToJSON(value?: DeleteUserProfileResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
    };
}
