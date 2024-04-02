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
export const Outcome = {
    Unspecified: 'OUTCOME_UNSPECIFIED',
    Success: 'OUTCOME_SUCCESS',
    Failure: 'OUTCOME_FAILURE',
    Error: 'OUTCOME_ERROR'
} as const;
export type Outcome = typeof Outcome[keyof typeof Outcome];


export function OutcomeFromJSON(json: any): Outcome {
    return OutcomeFromJSONTyped(json, false);
}

export function OutcomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Outcome {
    return json as Outcome;
}

export function OutcomeToJSON(value?: Outcome | null): any {
    return value as any;
}
