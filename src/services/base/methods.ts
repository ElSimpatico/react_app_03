import { AxiosRequestConfig } from 'axios';

import ApiCore from './core';

import { buildUrl } from './utils';

export function get(endpoint: string, variablePath?: any): Promise<any> {
    let url = endpoint;
    let axiosConfig: AxiosRequestConfig = {};

    if (variablePath) {
        url = buildUrl(endpoint, variablePath);
    }

    return ApiCore.get(url, axiosConfig);
}
