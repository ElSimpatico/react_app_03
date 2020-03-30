import { dateFormat, DATE_FORMAT } from '../../../src/shared/utils/date';

describe('Date utils', () => {
    it('dateFormat dd-mm-yyy hh:mm:ss', () => {
        const date = new Date('2018-12-18T08:00:00.000Z');
        const formatedDate = dateFormat(date, DATE_FORMAT.DD_MM_YYYY_HH_MM_SS);
        expect(formatedDate).toEqual('18-12-2018 08:00:00');
    });

    it('dateFormat dd-mm-yyy', () => {
        const date = new Date('2018-12-18T08:00:00.000Z');
        const formatedDate = dateFormat(date, DATE_FORMAT.DD_MM_YYYY);
        expect(formatedDate).toEqual('18-12-2018');
    });

    it('dateFormat hh:mm:ss', () => {
        const date = new Date('2018-12-18T08:00:00.000Z');
        const formatedDate = dateFormat(date, DATE_FORMAT.HH_MM_SS);
        expect(formatedDate).toEqual('08:00:00');
    });

    it('dateFormat default', () => {
        const date = new Date('2018-12-18T08:00:00.000Z');
        const formatedDate = dateFormat(date);
        expect(formatedDate).toEqual('18/12/2018');
    });
});
