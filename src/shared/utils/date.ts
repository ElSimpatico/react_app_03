export enum DATE_FORMAT {
    DD_MM_YYYY_HH_MM_SS = 'dd-mm-yyyy hh:mm:ss',
    DD_MM_YYYY = 'dd-mm-yyyy',
    HH_MM_SS = 'hh-mm-ss'
}

function twoDigits(num: number): string {
    if (num < 10) {
        return `0${num}`;
    }

    return num.toString();
}

function dateFormat_DD_MM_YY_HH_MM_SS(date: Date): string {
    const day: string = twoDigits(date.getDate());
    const month: string = twoDigits(date.getMonth() + 1);
    const year: number = date.getFullYear();
    const hours: string = twoDigits(date.getUTCHours());
    const min: string = twoDigits(date.getMinutes());
    const seg: string = twoDigits(date.getSeconds());
    return `${day}-${month}-${year} ${hours}:${min}:${seg}`;
}

function dateFormatDefault(date: Date): string {
    const day = twoDigits(date.getDate());
    const month = twoDigits(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export function dateFormat(date: Date, format?: DATE_FORMAT): string {
    switch (format) {
        case DATE_FORMAT.DD_MM_YYYY_HH_MM_SS:
            return dateFormat_DD_MM_YY_HH_MM_SS(date);
        case DATE_FORMAT.DD_MM_YYYY:
            return dateFormat_DD_MM_YY_HH_MM_SS(date).split(' ')[0];
        case DATE_FORMAT.HH_MM_SS:
            return dateFormat_DD_MM_YY_HH_MM_SS(date).split(' ')[1];
        default:
            return dateFormatDefault(date);
    }
}
