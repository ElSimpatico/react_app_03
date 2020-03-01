import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import { State } from './state';
import { reducers } from '../reducers';

const middlewares = composeWithDevTools(applyMiddleware(thunk));

export function createReduxStore(): Store<State> {
    return createStore(reducers, middlewares);
}
