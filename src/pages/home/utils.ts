import { Trip, Point } from '../../services/models';
import { Marker, MarkerPosition } from '../../shared/models';

import { getPathPropertyOr } from '../../shared/utils/functional';

function mapStopTrip(trip: Trip): Marker[] {
    return (trip.stops || [])
        .map((stop: { id: string; point: Point }) => {
            const position: MarkerPosition = {
                lat: getPathPropertyOr(null, ['point', '_latitude'], stop),
                lng: getPathPropertyOr(null, ['point', '_longitude'], stop)
            };

            return { position, stopId: stop.id };
        })
        .filter((marker: Marker) => {
            return marker.position.lat && marker.position.lng;
        });
}

export function parseMarker(trip: Trip): Marker[] {
    const originPosition: MarkerPosition = {
        lat: getPathPropertyOr(null, ['origin', 'point', '_latitude'], trip),
        lng: getPathPropertyOr(null, ['origin', 'point', '_longitude'], trip)
    };
    const originAddress: string = getPathPropertyOr(
        '',
        ['origin', 'address'],
        trip
    );
    const originDate: Date = new Date(
        getPathPropertyOr('', ['startTime'], trip)
    );

    const destinationPosition: MarkerPosition = {
        lat: getPathPropertyOr(
            null,
            ['destination', 'point', '_latitude'],
            trip
        ),
        lng: getPathPropertyOr(
            null,
            ['destination', 'point', '_longitude'],
            trip
        )
    };
    const destinationAddress: string = getPathPropertyOr(
        '',
        ['destination', 'address'],
        trip
    );
    const destinationDate: Date = new Date(
        getPathPropertyOr('', ['endTime'], trip)
    );

    const markers: Marker[] = mapStopTrip(trip);

    markers.unshift({
        position: originPosition,
        address: originAddress,
        date: originDate
    });
    markers.push({
        position: destinationPosition,
        address: destinationAddress,
        date: destinationDate
    });

    return markers;
}
