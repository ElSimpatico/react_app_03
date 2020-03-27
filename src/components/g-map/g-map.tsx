import React, { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
    GoogleApiWrapper,
    Map,
    Marker,
    Polyline,
    InfoWindow
} from 'google-maps-react';

import { pathOr } from 'ramda';

import { State } from '../../shared';
import { Marker as MarkerModel } from '../../shared/models';

import { Spinner } from '../../components';

import { useStyles } from './styles';

import { getStop } from '../../services';
import { Stop } from '../..//services/models';

function GMapContainer({ google }): ReactElement {
    const [positionsPath, setPositionsPath] = useState([]);
    const [bounds, setBounds] = useState(null);
    const [infoWindowState, setInfoWindowState] = useState({
        marker: null,
        visible: false
    });
    const [infoWindowContent, setInfoWindowContent] = useState(null);

    const { markers, route } = useSelector((state: State) => state.gMap);

    const classes = useStyles();

    function initMap() {
        const newBounds = new google.maps.LatLngBounds();
        newBounds.extend({ lat: 43.889678, lng: -4.981185 });
        newBounds.extend({ lat: 34.769551, lng: -5.70381 });
        newBounds.extend({ lat: 39.865602, lng: 4.446675 });
        newBounds.extend({ lat: 40.754114, lng: -11.699863 });

        setBounds(newBounds);
    }

    async function onMarker(gMarker: any, marker: MarkerModel) {
        setInfoWindowState({ marker: gMarker, visible: true });
        let newInfoWindowContent = null;
        if (marker.stopId) {
            const stop: Stop = await getStop(marker.stopId);
            newInfoWindowContent = {
                ...stop
            };
        } else {
            newInfoWindowContent = {
                address: marker.address
            };
        }
        setInfoWindowContent(newInfoWindowContent);
    }

    function onMap() {
        if (infoWindowState.visible) {
            setInfoWindowState({ marker: null, visible: false });
            setInfoWindowContent(null);
        }
    }

    useEffect(() => {
        const newBounds = new google.maps.LatLngBounds();
        markers.forEach((marker: MarkerModel) => {
            newBounds.extend(marker.position);
        });
        setBounds(newBounds);
    }, [markers]);

    useEffect(() => {
        if (pathOr(false, ['maps', 'geometry', 'encoding'], google)) {
            const decodedPath = google.maps.geometry.encoding.decodePath(route);
            setPositionsPath(decodedPath);
        }
    }, [route]);

    return (
        <Map
            google={google}
            bounds={bounds}
            onReady={() => initMap()}
            onClick={onMap}
        >
            {(markers || []).map((marker: MarkerModel, index: number) => {
                return (
                    <Marker
                        key={`marker-${index}`}
                        position={marker.position}
                        onClick={(props, gMarker, e) =>
                            onMarker(gMarker, marker)
                        }
                    />
                );
            })}
            <Polyline
                path={positionsPath}
                strokeColor={'#B22222'}
                strokeOpacity={1}
                strokeWeight={2}
            />

            <InfoWindow
                marker={infoWindowState.marker}
                visible={infoWindowState.visible}
            >
                <div className={classes.infoWindowContentWrapper}>
                    {!infoWindowContent ? (
                        <Spinner />
                    ) : (
                        <div>{infoWindowContent.address}</div>
                    )}
                </div>
            </InfoWindow>
        </Map>
    );
}

export const GMap = GoogleApiWrapper(props => ({
    apiKey: process.env.GOOGLE_API_KEY,
    language: 'es',
    region: 'ES',
    LoadingContainer: Spinner
}))(GMapContainer);
