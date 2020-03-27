import { GMapState } from 'src/shared/models';

export const SET_GMAP = 'SET_GMAP';

export interface SetGMapAction {
    type: string;
    payload: Partial<GMapState>;
}

export type GMapActions = SetGMapAction;

export function setGMap(state: Partial<GMapState>): SetGMapAction {
    return {
        type: SET_GMAP,
        payload: state
    };
}
