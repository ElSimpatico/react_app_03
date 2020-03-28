import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { TripCardProps } from './trip-card-props';

import './styles.css';

export function TripCard({
    driver,
    description,
    selected,
    onTripCard
}: TripCardProps): ReactElement<TripCardProps> {
    const [t] = useTranslation('common');

    return (
        <div
            className={`${'trip-card'} ${selected ? 'selected-trip' : ''}`}
            onClick={onTripCard}
        >
            <div>
                <div>
                    <div>{`${t('driver')}: ${driver}`}</div>
                </div>
                <div>
                    <div>{`${t('description')}: ${description}`}</div>
                </div>
            </div>
        </div>
    );
}
