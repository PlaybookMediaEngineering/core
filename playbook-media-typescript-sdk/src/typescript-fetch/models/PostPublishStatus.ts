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
export const PostPublishStatus = {
    Unspecified: 'POST_PUBLISH_STATUS_UNSPECIFIED',
    Draft: 'POST_PUBLISH_STATUS_DRAFT',
    Published: 'POST_PUBLISH_STATUS_PUBLISHED',
    InReview: 'POST_PUBLISH_STATUS_IN_REVIEW',
    Archived: 'POST_PUBLISH_STATUS_ARCHIVED'
} as const;
export type PostPublishStatus = typeof PostPublishStatus[keyof typeof PostPublishStatus];


export function PostPublishStatusFromJSON(json: any): PostPublishStatus {
    return PostPublishStatusFromJSONTyped(json, false);
}

export function PostPublishStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostPublishStatus {
    return json as PostPublishStatus;
}

export function PostPublishStatusToJSON(value?: PostPublishStatus | null): any {
    return value as any;
}
