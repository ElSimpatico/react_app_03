import { TestState } from 'src/shared/models';

export const SET_TEST = 'SET_TEST';

export interface SetTestAction {
    type: string;
    payload: Partial<TestState>;
}

export type TestActions = SetTestAction;

export function setTest(test: Partial<TestState>): SetTestAction {
    return {
        type: SET_TEST,
        payload: test
    };
}
