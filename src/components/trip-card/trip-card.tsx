import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from './styles';
import { TripCardProps } from './trip-card-props';

export function TripCard({
    driver,
    description,
    selected,
    onTripCard
}: TripCardProps): ReactElement<TripCardProps> {
    const classes = useStyles();
    const [t] = useTranslation('common');

    return (
        <div
            className={`${classes.tripCard} ${
                selected ? classes.selectedTrip : ''
            }`}
            onClick={onTripCard}
        >
            <div className={classes.tripCardContent}>
                <div className={classes.tripCardItem}>
                    <div>{`${t('driver')}: ${driver}`}</div>
                </div>
                <div className={classes.tripCardItem}>
                    <div>{`${t('description')}: ${description}`}</div>
                </div>
            </div>
        </div>
    );
}
