import { combineReducers } from 'redux';
import { TestReducer } from './reducer-test';

export const reducers = combineReducers({
    test: TestReducer
});
