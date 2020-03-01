import React from 'react';
import { Home } from '../src/pages';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';

const mockStore = configureMockStore();
const store = mockStore({
    test: {
        name: 'name'
    }
});

jest.mock('react-i18next', () => ({
    useTranslation: () => [k => k]
}));

describe('test', () => {
    it('Home', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        expect(wrapper.find('Home')).toHaveLength(1);
    });
});
