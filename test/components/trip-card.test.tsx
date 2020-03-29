import React from 'react';
import { mount } from 'enzyme';

import { TripCard, TripCardProps } from '../../src/components';

describe('TripCard component', () => {
    let props: TripCardProps = {
        driver: 'Manuel',
        description: 'Madrid a Barcelona',
        selected: false,
        onTripCard: () => {}
    };

    it('Should mount TripCard', () => {
        const wrapper = mount(<TripCard {...props} />);
        expect(wrapper.find('.trip-card')).toHaveLength(1);
    });

    it('Should mount TripCard with class name selected if selected property is true', () => {
        const wrapper = mount(<TripCard {...props} />);
        expect(wrapper.find('.selected-trip')).toHaveLength(0);

        wrapper.setProps({ selected: true });
        expect(wrapper.find('.selected-trip')).toHaveLength(1);
    });
});
