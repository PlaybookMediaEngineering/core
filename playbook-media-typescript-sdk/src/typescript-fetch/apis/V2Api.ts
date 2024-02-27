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


import * as runtime from '../runtime';
import type {
  GetCannyUserSSOTokenResponse,
  InternalErrorMessageResponse,
  PathUnknownErrorMessageResponse,
  Status,
  ValidationErrorMessageResponse,
} from '../models/index';
import {
    GetCannyUserSSOTokenResponseFromJSON,
    GetCannyUserSSOTokenResponseToJSON,
    InternalErrorMessageResponseFromJSON,
    InternalErrorMessageResponseToJSON,
    PathUnknownErrorMessageResponseFromJSON,
    PathUnknownErrorMessageResponseToJSON,
    StatusFromJSON,
    StatusToJSON,
    ValidationErrorMessageResponseFromJSON,
    ValidationErrorMessageResponseToJSON,
} from '../models/index';

export interface GetCannyUserSSOTokenRequest {
    userId: string;
    accountType: GetCannyUserSSOTokenAccountTypeEnum;
}

/**
 * 
 */
export class V2Api extends runtime.BaseAPI {

    /**
     * Fetches a user sso token for canny
     * Retrieves user sso token for canny
     */
    async getCannyUserSSOTokenRaw(requestParameters: GetCannyUserSSOTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCannyUserSSOTokenResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getCannyUserSSOToken.');
        }

        if (requestParameters.accountType === null || requestParameters.accountType === undefined) {
            throw new runtime.RequiredError('accountType','Required parameter requestParameters.accountType was null or undefined when calling getCannyUserSSOToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/user/{userId}/canny/accounty-type/{accountType}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"accountType"}}`, encodeURIComponent(String(requestParameters.accountType))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCannyUserSSOTokenResponseFromJSON(jsonValue));
    }

    /**
     * Fetches a user sso token for canny
     * Retrieves user sso token for canny
     */
    async getCannyUserSSOToken(requestParameters: GetCannyUserSSOTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCannyUserSSOTokenResponse> {
        const response = await this.getCannyUserSSOTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetCannyUserSSOTokenAccountTypeEnum = {
    Unspecified: 'ACCOUNT_TYPE_UNSPECIFIED',
    User: 'ACCOUNT_TYPE_USER',
    Community: 'ACCOUNT_TYPE_COMMUNITY'
} as const;
export type GetCannyUserSSOTokenAccountTypeEnum = typeof GetCannyUserSSOTokenAccountTypeEnum[keyof typeof GetCannyUserSSOTokenAccountTypeEnum];
