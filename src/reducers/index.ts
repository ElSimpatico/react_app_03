import { combineReducers } from 'redux';
import { TestReducer } from './reducer-test';
import { GMapReducer } from './gMap-reducer';

export const reducers = combineReducers({
    test: TestReducer,
    gMap: GMapReducer
});
