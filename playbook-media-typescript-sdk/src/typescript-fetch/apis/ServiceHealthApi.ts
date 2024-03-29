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
  HealthCheckResponse,
  InternalErrorMessageResponse,
  PathUnknownErrorMessageResponse,
  Status,
  ValidationErrorMessageResponse,
} from '../models/index';
import {
    HealthCheckResponseFromJSON,
    HealthCheckResponseToJSON,
    InternalErrorMessageResponseFromJSON,
    InternalErrorMessageResponseToJSON,
    PathUnknownErrorMessageResponseFromJSON,
    PathUnknownErrorMessageResponseToJSON,
    StatusFromJSON,
    StatusToJSON,
    ValidationErrorMessageResponseFromJSON,
    ValidationErrorMessageResponseToJSON,
} from '../models/index';

/**
 * 
 */
export class ServiceHealthApi extends runtime.BaseAPI {

    /**
     * This endpoint performs a healc check on the service
     * health check
     */
    async healthCheckRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthCheckResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/health`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HealthCheckResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint performs a healc check on the service
     * health check
     */
    async healthCheck(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthCheckResponse> {
        const response = await this.healthCheckRaw(initOverrides);
        return await response.value();
    }

}
