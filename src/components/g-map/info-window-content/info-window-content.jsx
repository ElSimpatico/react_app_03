import React from 'react';
import { useTranslation } from 'react-i18next';

import { dateFormat, DATE_FORMAT } from '../../../shared/utils/date';

export function InfoWindowContent({ info }) {
    const [t] = useTranslation('common');
    return (
        <div>
            <div>{`${t('address')}: ${info.address}`}</div>
            <div>{`${t('date')}: ${dateFormat(
                info.date,
                DATE_FORMAT.DD_MM_YYYY
            )}`}</div>
            <div>{`${t('hour')}: ${dateFormat(
                info.date,
                DATE_FORMAT.HH_MM_SS
            )}`}</div>
        </div>
    );
}
