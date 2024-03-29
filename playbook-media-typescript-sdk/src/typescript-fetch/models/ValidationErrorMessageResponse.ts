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
import type { ErrorCode } from './ErrorCode';
import {
    ErrorCodeFromJSON,
    ErrorCodeFromJSONTyped,
    ErrorCodeToJSON,
} from './ErrorCode';

/**
 * 
 * @export
 * @interface ValidationErrorMessageResponse
 */
export interface ValidationErrorMessageResponse {
    /**
     * 
     * @type {ErrorCode}
     * @memberof ValidationErrorMessageResponse
     */
    code?: ErrorCode;
    /**
     * 
     * @type {string}
     * @memberof ValidationErrorMessageResponse
     */
    message?: string;
}

/**
 * Check if a given object implements the ValidationErrorMessageResponse interface.
 */
export function instanceOfValidationErrorMessageResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ValidationErrorMessageResponseFromJSON(json: any): ValidationErrorMessageResponse {
    return ValidationErrorMessageResponseFromJSONTyped(json, false);
}

export function ValidationErrorMessageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationErrorMessageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : ErrorCodeFromJSON(json['code']),
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ValidationErrorMessageResponseToJSON(value?: ValidationErrorMessageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': ErrorCodeToJSON(value.code),
        'message': value.message,
    };
}

