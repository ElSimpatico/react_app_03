import { getTrips } from '../../src/services';
import Endpoints from '../../src/services/base/endpoints';
import * as Methods from '../../src/services/base/methods';

const data = { description: 'Madrid a Barcelona' };
const spyGet = jest
    .spyOn(Methods, 'get')
    .mockImplementation(() => Promise.resolve(data));

afterAll(() => {
    jest.clearAllMocks();
});

describe('Services trips', () => {
    it('getTrips', async () => {
        const result = await getTrips();
        expect(Object.is(result, data)).toBe(true);
        expect(spyGet).toBeCalledWith(Endpoints.trips);
    });
});
