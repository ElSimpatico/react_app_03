import { Point } from './Point';

export interface Trip {
    destination: {
        address: string;
        point: Point;
    };
    endTime: string;
    startTime: string;
    description: string;
    driverName: string;
    route: string;
    status: string;
    origin: {
        address: string;
        point: Point;
    };
    stops: { id: string; point: Point }[];
}
