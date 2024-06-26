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


/**
 * - VIRTUAL_PROFILE_TYPE_USER: this is essentially for regular users that just want to consume content
 *  - VIRTUAL_PROFILE_TYPE_BUSINESS: this is essentially for creators
 * @export
 */
export const VirtualProfileType = {
    Unspecified: 'VIRTUAL_PROFILE_TYPE_UNSPECIFIED',
    User: 'VIRTUAL_PROFILE_TYPE_USER',
    Business: 'VIRTUAL_PROFILE_TYPE_BUSINESS'
} as const;
export type VirtualProfileType = typeof VirtualProfileType[keyof typeof VirtualProfileType];


export function VirtualProfileTypeFromJSON(json: any): VirtualProfileType {
    return VirtualProfileTypeFromJSONTyped(json, false);
}

export function VirtualProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirtualProfileType {
    return json as VirtualProfileType;
}

export function VirtualProfileTypeToJSON(value?: VirtualProfileType | null): any {
    return value as any;
}

