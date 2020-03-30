export function getPathPropertyOr(
    defaultValue: any,
    properties: any[],
    obj: any
): any {
    let index = 0;
    let existProperty = true;
    let currentObj: any = obj;

    while (existProperty && index < properties.length) {
        if (typeof currentObj !== 'object') {
            existProperty = false;
            break;
        }
        currentObj = currentObj[properties[index]];
        existProperty = currentObj !== null && currentObj !== undefined;
        index++;
    }

    return existProperty ? currentObj : defaultValue;
}
