import { buildUrl } from './utils';

function checkStatus(response: any) {
    if (response.status === 200) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
}

function getJson(response: any) {
    return response.json();
}

export function get(endpoint: string, variablePath?: any): Promise<any> {
    let url = `${process.env.API_BASE}${endpoint}`;

    if (variablePath) {
        url = buildUrl(url, variablePath);
    }

    const configuration = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(url, configuration)
        .then(checkStatus)
        .then(getJson);
}
