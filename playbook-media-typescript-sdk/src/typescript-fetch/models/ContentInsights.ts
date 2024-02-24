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
import type { Entities } from './Entities';
import {
    EntitiesFromJSON,
    EntitiesFromJSONTyped,
    EntitiesToJSON,
} from './Entities';
import type { Sentiment } from './Sentiment';
import {
    SentimentFromJSON,
    SentimentFromJSONTyped,
    SentimentToJSON,
} from './Sentiment';

/**
 * 
 * @export
 * @interface ContentInsights
 */
export interface ContentInsights {
    /**
     * 
     * @type {string}
     * @memberof ContentInsights
     */
    sentenceCount?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentInsights
     */
    wordCount?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentInsights
     */
    language?: string;
    /**
     * 
     * @type {number}
     * @memberof ContentInsights
     */
    languageConfidence?: number;
    /**
     * 
     * @type {Array<Entities>}
     * @memberof ContentInsights
     */
    entities?: Array<Entities>;
    /**
     * 
     * @type {Sentiment}
     * @memberof ContentInsights
     */
    sentiment?: Sentiment;
}

/**
 * Check if a given object implements the ContentInsights interface.
 */
export function instanceOfContentInsights(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContentInsightsFromJSON(json: any): ContentInsights {
    return ContentInsightsFromJSONTyped(json, false);
}

export function ContentInsightsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentInsights {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sentenceCount': !exists(json, 'sentenceCount') ? undefined : json['sentenceCount'],
        'wordCount': !exists(json, 'wordCount') ? undefined : json['wordCount'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'languageConfidence': !exists(json, 'languageConfidence') ? undefined : json['languageConfidence'],
        'entities': !exists(json, 'entities') ? undefined : ((json['entities'] as Array<any>).map(EntitiesFromJSON)),
        'sentiment': !exists(json, 'sentiment') ? undefined : SentimentFromJSON(json['sentiment']),
    };
}

export function ContentInsightsToJSON(value?: ContentInsights | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sentenceCount': value.sentenceCount,
        'wordCount': value.wordCount,
        'language': value.language,
        'languageConfidence': value.languageConfidence,
        'entities': value.entities === undefined ? undefined : ((value.entities as Array<any>).map(EntitiesToJSON)),
        'sentiment': SentimentToJSON(value.sentiment),
    };
}

