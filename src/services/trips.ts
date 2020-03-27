import { AxiosResponse } from 'axios';
import { get } from './base/methods';
import Endpoints from './base/endpoints';
import { Trip } from './models';

export async function getTrips(): Promise<Trip[]> {
    const response: AxiosResponse = await get(Endpoints.trips);
    if (response.status === 200) {
        return response.data;
    }

    throw new Error('Error get trips');
}
