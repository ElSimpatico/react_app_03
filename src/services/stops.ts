import { get } from './base/methods';
import Endpoints from './base/endpoints';
import { Stop } from './models';

export async function getStop(stopId: string): Promise<Stop> {
    const variablePath = { stopId };
    const response: Stop = await get(Endpoints.stops, variablePath);
    return response;
}
