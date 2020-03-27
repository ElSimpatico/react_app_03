import { AxiosResponse } from 'axios';
import { get } from './base/methods';
import Endpoints from './base/endpoints';
import { Stop } from './models';

export async function getStop(stopId: string): Promise<Stop> {
    const variablePath = { stopId };
    const response: AxiosResponse = await get(Endpoints.stops, variablePath);
    if (response.status === 200) {
        return response.data;
    }

    throw new Error('Error get stop');
}
