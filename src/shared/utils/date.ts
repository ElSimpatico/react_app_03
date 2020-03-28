export enum DATE_FORMAT {
    DD_MM_YYYY_HH_MM_SS = 'dd-mm-yyyy hh:mm:ss'
}

export function dateFormat(date: Date, format: DATE_FORMAT): string {
    switch (format) {
        case DATE_FORMAT.DD_MM_YYYY_HH_MM_SS:
            return `${date.getDate()}-${date.getMonth() +
                1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        default:
            return `${date.getDate()}/${date.getMonth() +
                1}/${date.getFullYear()}`;
    }
}
