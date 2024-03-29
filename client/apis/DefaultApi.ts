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


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  ResponseListServerApiBlogPost,
  ResponseStr,
} from '../models';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    ResponseListServerApiBlogPostFromJSON,
    ResponseListServerApiBlogPostToJSON,
    ResponseStrFromJSON,
    ResponseStrToJSON,
} from '../models';

export interface GreetApiGreetingGetRequest {
    toGreet: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Serve up some _original content_
     * Get Blog Posts
     */
    async getBlogPostsApiBlogPostsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseListServerApiBlogPost>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/blog/posts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseListServerApiBlogPostFromJSON(jsonValue));
    }

    /**
     * Serve up some _original content_
     * Get Blog Posts
     */
    async getBlogPostsApiBlogPostsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseListServerApiBlogPost> {
        const response = await this.getBlogPostsApiBlogPostsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * say hello
     * Greet
     */
    async greetApiGreetingGetRaw(requestParameters: GreetApiGreetingGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseStr>> {
        if (requestParameters.toGreet === null || requestParameters.toGreet === undefined) {
            throw new runtime.RequiredError('toGreet','Required parameter requestParameters.toGreet was null or undefined when calling greetApiGreetingGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.toGreet !== undefined) {
            queryParameters['to_greet'] = requestParameters.toGreet;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/greeting`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseStrFromJSON(jsonValue));
    }

    /**
     * say hello
     * Greet
     */
    async greetApiGreetingGet(requestParameters: GreetApiGreetingGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseStr> {
        const response = await this.greetApiGreetingGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
