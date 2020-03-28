import React, { ReactElement, useState, useEffect } from 'react';

import { TripCard, GMap, Spinner } from '../../components';

import { getTrips } from '../../services';
import { Trip } from '../../services/models';
import { Marker } from '../../shared/models';

import { parseMarker } from './utils';

import './styles.css';

export function Home(): ReactElement {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [trips, setTrips] = useState<Trip[]>([]);
    const [gMap, setGMap] = useState({ markers: [], route: '' });
    const [selectedTrip, setSelectedTrip] = useState<number>(-1);

    async function loadData() {
        try {
            const trips: Trip[] = await getTrips();
            setTrips(trips);
        } catch (ex) {
            console.error(ex);
        }
        setIsLoading(false);
    }

    function onTripCard(index: number) {
        const trip: Trip = trips[index];
        const markers: Marker[] = parseMarker(trip);
        setSelectedTrip(index);
        setGMap({ markers, route: trip.route });
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        loadData();
    }, []);

    return isLoading ? (
        <div className={'spinner-wrapper'}>
            <Spinner />
        </div>
    ) : (
        <div className='container'>
            <div className={'trip-cards-wrapper'}>
                {trips.map((trip: Trip, index: number) => {
                    return (
                        <TripCard
                            key={`trip-${index}`}
                            driver={trip.driverName}
                            description={trip.description}
                            selected={index === selectedTrip}
                            onTripCard={() => onTripCard(index)}
                        />
                    );
                })}
            </div>
            <div className='map-wrapper'>
                <GMap
                    center={{ lat: 40.406725, lng: -3.709697 }}
                    zoom={6}
                    markers={gMap.markers}
                    route={gMap.route}
                />
            </div>
        </div>
    );
}
