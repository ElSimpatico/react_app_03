import { GMapState } from '../shared/models';
import { GMapActions, SET_GMAP } from '../actions';

const INIT_GMAP_STATE: GMapState = {
    markers: [],
    route: ''
};

export function GMapReducer(
    state: GMapState = INIT_GMAP_STATE,
    action: GMapActions
): GMapState {
    switch (action.type) {
        case SET_GMAP:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
