export interface Stop {
    stopTime: string;
    paid: boolean;
    address: string;
    tripId: number;
    userName: string;
    point: {
        _latitude: number;
        _longitude: number;
    };
    price: number;
}
