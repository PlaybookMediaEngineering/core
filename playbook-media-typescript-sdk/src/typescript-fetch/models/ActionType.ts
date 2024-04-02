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
export const ActionType = {
    Unspecified: 'ACTION_TYPE_UNSPECIFIED',
    Create: 'ACTION_TYPE_CREATE',
    Update: 'ACTION_TYPE_UPDATE',
    Delete: 'ACTION_TYPE_DELETE',
    Read: 'ACTION_TYPE_READ',
    Login: 'ACTION_TYPE_LOGIN',
    Logout: 'ACTION_TYPE_LOGOUT',
    PostOperation: 'ACTION_TYPE_POST_OPERATION'
} as const;
export type ActionType = typeof ActionType[keyof typeof ActionType];


export function ActionTypeFromJSON(json: any): ActionType {
    return ActionTypeFromJSONTyped(json, false);
}

export function ActionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionType {
    return json as ActionType;
}

export function ActionTypeToJSON(value?: ActionType | null): any {
    return value as any;
}

