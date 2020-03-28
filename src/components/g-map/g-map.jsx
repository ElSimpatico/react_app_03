import React, { useEffect, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { loadScript } from '../../shared/utils/loader';
import { getPathPropertyOr } from '../../shared/utils/functional';

import { getStop } from '../../services';

import { InfoWindowContent } from './info-window-content/info-window-content';
import { Spinner } from '../spinner/spinner';

import './styles.css';

const GOOGLE_API_URL = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=geometry,places`;
let map = null;
let markersMap = [];
let polyline = null;
let infoWindow = null;
const INFO_WINDOW_LOADING = `${renderToStaticMarkup(
    <Spinner size={'small'} />
).toString()}`;

export function GMap({ center, zoom, markers, route }) {
    const [isLoading, setIsLoading] = useState(true);

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center,
            zoom
        });

        infoWindow = new google.maps.InfoWindow();

        map.addListener('click', function() {
            if (infoWindow) {
                infoWindow.close();
            }
        });
    }

    async function loadGoogleApi() {
        try {
            await loadScript(GOOGLE_API_URL);
            initMap();
            setIsLoading(false);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        loadGoogleApi();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            if (markersMap.length > 0) {
                markersMap.forEach(markerMap => {
                    markerMap.setMap(null);
                });
                markersMap = [];
            }
            const bounds = new google.maps.LatLngBounds();
            markers.forEach(marker => {
                const newMarkerMap = new google.maps.Marker({
                    position: marker.position,
                    map: map
                });

                newMarkerMap.addListener('click', async () => {
                    infoWindow.setContent(INFO_WINDOW_LOADING);
                    infoWindow.open(map, newMarkerMap);
                    let infoContent = { ...marker };
                    if (marker.stopId) {
                        try {
                            const stop = await getStop(marker.stopId);
                            infoContent = {
                                ...marker,
                                address: stop.address,
                                date: new Date(stop.stopTime)
                            };
                        } catch (err) {
                            console.error(err);
                        }
                    }

                    infoWindow.setContent(
                        renderToStaticMarkup(
                            <InfoWindowContent info={infoContent} />
                        )
                    );
                });

                markersMap.push(newMarkerMap);

                const latLng = new google.maps.LatLng(marker.position);
                bounds.extend(latLng);
            });

            map.fitBounds(bounds);
            map.panToBounds(bounds);
        }
    }, [markers]);

    useEffect(() => {
        if (
            !isLoading &&
            getPathPropertyOr(false, ['maps', 'geometry', 'encoding'], google)
        ) {
            if (polyline) {
                polyline.setMap(null);
            }

            const decodedPath = google.maps.geometry.encoding.decodePath(route);
            polyline = new google.maps.Polyline({
                path: decodedPath,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            polyline.setMap(map);
        }
    }, [route]);

    return <div id='map'></div>;
}
