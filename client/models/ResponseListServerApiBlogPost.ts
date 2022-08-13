/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlogPost } from './BlogPost';
import {
    BlogPostFromJSON,
    BlogPostFromJSONTyped,
    BlogPostToJSON,
} from './BlogPost';

/**
 * a generic api response
 * @export
 * @interface ResponseListServerApiBlogPost
 */
export interface ResponseListServerApiBlogPost {
    /**
     * 
     * @type {Array<BlogPost>}
     * @memberof ResponseListServerApiBlogPost
     */
    data: Array<BlogPost>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ResponseListServerApiBlogPost
     */
    errors?: Array<string>;
}

/**
 * Check if a given object implements the ResponseListServerApiBlogPost interface.
 */
export function instanceOfResponseListServerApiBlogPost(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function ResponseListServerApiBlogPostFromJSON(json: any): ResponseListServerApiBlogPost {
    return ResponseListServerApiBlogPostFromJSONTyped(json, false);
}

export function ResponseListServerApiBlogPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseListServerApiBlogPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BlogPostFromJSON)),
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function ResponseListServerApiBlogPostToJSON(value?: ResponseListServerApiBlogPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(BlogPostToJSON)),
        'errors': value.errors,
    };
}

