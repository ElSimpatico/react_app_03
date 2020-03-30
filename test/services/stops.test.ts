import { getStop } from '../../src/services';
import Endpoints from '../../src/services/base/endpoints';
import * as Methods from '../../src/services/base/methods';

const data = { userName: 'Andres' };
const spyGet = jest
    .spyOn(Methods, 'get')
    .mockImplementation(() => Promise.resolve(data));

afterAll(() => {
    jest.clearAllMocks();
});

describe('Services stops', () => {
    it('getStop', async () => {
        const stopId = '001';
        const result = await getStop(stopId);
        expect(Object.is(result, data)).toBe(true);
        expect(spyGet).toBeCalledWith(Endpoints.stops, { stopId });
    });
});
