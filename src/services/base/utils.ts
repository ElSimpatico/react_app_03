export function buildUrl(endpoint: string, pathsVariable: any): string {
    let url = endpoint;
    Object.keys(pathsVariable).forEach(key => {
        url = url.replace(`:${key}`, pathsVariable[key]);
    });

    return url;
}
