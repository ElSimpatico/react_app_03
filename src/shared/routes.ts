import { Home } from '../pages';

export enum PATHS {
    ROOT = '/'
}

export interface ApplicationRoute {
    path: string;
    key: string;
    component: any;
}

export const ROUTES: ApplicationRoute[] = [
    {
        path: PATHS.ROOT,
        key: 'home',
        component: Home
    }
];
