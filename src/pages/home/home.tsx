import React, { ReactElement, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Grid } from '@material-ui/core';

import { pathOr } from 'ramda';

import { TripCard, GMap, Spinner } from '../../components';
import { useStyles } from './styles';

import { getTrips } from '../../services';
import { Trip, Point } from '../../services/models';
import { Marker } from '../../shared/models';

import { setGMap } from '../../actions';

export function Home(): ReactElement {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [trips, setTrips] = useState<Trip[]>([]);
    const [selectedTrip, setSelectedTrip] = useState<number>(-1);

    const dispatch = useDispatch();

    const classes = useStyles();

    async function loadData() {
        try {
            const trips: Trip[] = await getTrips();
            setTrips(trips);
        } catch (ex) {
            console.error(ex);
        }
        setIsLoading(false);
    }

    function getMarkersTrip(trip: Trip): Marker[] {
        const originPoint: Point = pathOr(null, ['origin', 'point'], trip);
        const destinationPoint = pathOr(null, ['destination', 'point'], trip);
        const markerPosition: Marker[] = (trip.stops || [])
            .map(stop => {
                const position = {
                    lat: pathOr(null, ['point', '_latitude'], stop),
                    lng: pathOr(null, ['point', '_longitude'], stop)
                };
                return { position, stopId: stop.id };
            })
            .filter((marker: Marker) => {
                return marker.position.lat && marker.position.lng;
            });

        if (originPoint) {
            const { _latitude: lat, _longitude: lng } = originPoint;
            markerPosition.unshift({
                position: { lat, lng },
                address: pathOr('', ['origin', 'address'], trip)
            });
        }

        if (destinationPoint) {
            const { _latitude: lat, _longitude: lng } = destinationPoint;
            markerPosition.push({
                position: { lat, lng },
                address: pathOr('', ['destination', 'address'], trip)
            });
        }

        return markerPosition;
    }

    function onTripCard(index: number) {
        const trip: Trip = trips[index];
        const markers: Marker[] = getMarkersTrip(trip);
        setSelectedTrip(index);
        dispatch(setGMap({ markers, route: trip.route }));
    }

    useEffect(() => {
        loadData();
    }, []);

    return isLoading ? (
        <Spinner />
    ) : (
        <Grid container>
            <Grid item xs={3}>
                <div className={'tripsWrapper'}>
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
            </Grid>
            <Grid item xs={9}>
                <div className={classes.mapWrapper}>
                    <GMap />
                </div>
            </Grid>
        </Grid>
    );
}
