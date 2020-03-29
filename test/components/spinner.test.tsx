import React from 'react';
import { mount } from 'enzyme';

import { Spinner, SPINNER_SIZE } from '../../src/components';

describe('Spinner component', () => {
    it('Should mount Spinner', () => {
        const wrapper = mount(<Spinner />);
        expect(wrapper.find('Spinner')).toHaveLength(1);
    });

    it('Should mount Spinner with class name of size property', () => {
        const wrapper = mount(<Spinner size={SPINNER_SIZE.SMALL} />);
        const className = `.spinner-${SPINNER_SIZE.SMALL}`;
        expect(wrapper.find(className)).toHaveLength(1);
    });
});
