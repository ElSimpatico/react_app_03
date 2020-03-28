export interface MarkerPosition {
    lat: number;
    lng: number;
}

export interface Marker {
    position: MarkerPosition;
    stopId?: string;
    address?: string;
    date?: Date;
}
