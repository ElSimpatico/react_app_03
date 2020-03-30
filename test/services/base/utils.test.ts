import { buildUrl } from '../../../src/services/base/utils';

describe('Services base utils', () => {
    it('buildUrl replace correctly path variable with format :variable', () => {
        const urlBase = 'https://www.URLBASE.com/api/trip';
        const endpoint = `${urlBase}/:tripId`;
        const pathVariables = {
            tripId: 'trip-001'
        };

        expect(buildUrl(endpoint, pathVariables)).toEqual(
            `${urlBase}/${pathVariables.tripId}`
        );
    });

    it('buildUrl dont replace correctly path variable with different format to :variable', () => {
        const urlBase = 'https://www.URLBASE.com/api/trip';
        const endpoint = `${urlBase}/::tripId`;
        const pathVariables = {
            tripId: 'trip-001'
        };

        expect(buildUrl(endpoint, pathVariables)).toEqual(
            `${urlBase}/:${pathVariables.tripId}`
        );
    });
});
