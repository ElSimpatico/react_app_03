export function getPathPropertyOr(
    defaultValue: any,
    properties: any[],
    obj: any
): any {
    let index = 0;
    let existProperty = true;
    let currentObj: any = obj;

    while (existProperty && index < properties.length) {
        currentObj = currentObj[properties[index]];
        existProperty = currentObj !== null && currentObj !== undefined;
        if (existProperty) {
            index++;
        } else {
            currentObj = defaultValue;
        }
    }

    return currentObj;
}
