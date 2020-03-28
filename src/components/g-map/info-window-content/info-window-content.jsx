import React from 'react';
import { useTranslation } from 'react-i18next';

import { dateFormat, DATE_FORMAT } from '../../../shared/utils/date';

export function InfoWindowContent({ info }) {
    const [t] = useTranslation('common');
    function getDate() {
        const date = dateFormat(info.date, DATE_FORMAT.DD_MM_YYYY_HH_MM_SS);
        return date.split(' ')[0];
    }

    function getHour() {
        const date = dateFormat(info.date, DATE_FORMAT.DD_MM_YYYY_HH_MM_SS);
        return date.split(' ')[1];
    }
    return (
        <div>
            <div>{`${t('address')}: ${info.address}`}</div>
            <div>{`${t('date')}: ${getDate()}`}</div>
            <div>{`${t('hour')}: ${getHour()}`}</div>
        </div>
    );
}
