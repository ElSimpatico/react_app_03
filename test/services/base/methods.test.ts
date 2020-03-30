import { get } from '../../../src/services/base/methods';

describe('Services base methods', () => {
    const data = { id: '123', description: 'description' };
    const succesResponse = Promise.resolve({ status: 200, json: () => data });
    const errorResponse = Promise.resolve({
        status: 400,
        statusText: 'Error fetch'
    });

    const succesFetch = jest.fn().mockImplementation(() => succesResponse);
    const errorFetch = jest.fn().mockImplementation(() => errorResponse);

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('get resolve success', async () => {
        window.fetch = succesFetch;
        const endpoint = '/stops/:stopId';
        const pathVariable = { stopId: '001' };

        const Urlparam = `${process.env.API_BASE}/stops/${pathVariable.stopId}`;
        const configurationParam = {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        };
        const dataResponse = await get(endpoint, pathVariable);
        expect(Object.is(dataResponse, data)).toBe(true);
        expect(succesFetch).toHaveBeenCalledWith(Urlparam, configurationParam);
    });

    it('get reject error', async () => {
        window.fetch = errorFetch;
        const endpoint = '/trips';

        const Urlparam = `${process.env.API_BASE}/trips`;
        const configurationParam = {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        };
        try {
            await get(endpoint);
        } catch (ex) {
            expect(ex.message).toMatch('Error');
            expect(errorFetch).toHaveBeenCalledWith(
                Urlparam,
                configurationParam
            );
        }
    });
});
