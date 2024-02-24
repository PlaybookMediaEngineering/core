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
 * 
 * @export
 */
export const AccountType = {
    Unspecified: 'ACCOUNT_TYPE_UNSPECIFIED',
    User: 'ACCOUNT_TYPE_USER',
    Community: 'ACCOUNT_TYPE_COMMUNITY'
} as const;
export type AccountType = typeof AccountType[keyof typeof AccountType];


export function AccountTypeFromJSON(json: any): AccountType {
    return AccountTypeFromJSONTyped(json, false);
}

export function AccountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountType {
    return json as AccountType;
}

export function AccountTypeToJSON(value?: AccountType | null): any {
    return value as any;
}

