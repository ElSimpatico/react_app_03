import { TestState } from '../shared/models';
import { TestActions } from '../actions';
import { SET_TEST } from '../actions';

const INIT_TEST_STATE: TestState = {
    name: 'testName'
};

export function TestReducer(
    state: TestState = INIT_TEST_STATE,
    action: TestActions
): TestState {
    switch (action.type) {
        case SET_TEST:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
