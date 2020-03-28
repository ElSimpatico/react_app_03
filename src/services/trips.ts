import { get } from './base/methods';
import Endpoints from './base/endpoints';
import { Trip } from './models';

export async function getTrips(): Promise<Trip[]> {
    const response: Trip[] = await get(Endpoints.trips);
    return response;
}
