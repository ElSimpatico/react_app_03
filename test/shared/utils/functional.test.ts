import { getPathPropertyOr } from '../../../src/shared/utils/functional';

describe('Functional utils', () => {
    const obj: any = {
        prop1: 'value1',
        prop2: {
            prop21: 'value21',
            prop22: {
                prop211: 'value211'
            }
        },
        prop3: ['a', 'b', 'c']
    };

    it('getPathPropertyOr return value', () => {
        const b: string = getPathPropertyOr('', ['prop3', 1], obj);
        expect(b).toEqual(obj.prop3[1]);

        const value211: string = getPathPropertyOr(
            '',
            ['prop2', 'prop22', 'prop211'],
            obj
        );
        expect(value211).toEqual(obj.prop2.prop22.prop211);
    });

    it('getPathPropertyOr return default value', () => {
        const b: string = getPathPropertyOr('', ['prop1', 1], obj);
        expect(b).toEqual('');

        const prop3: string = getPathPropertyOr('', ['prop2', 'prop23'], obj);
        expect(prop3).toEqual('');
    });
});
