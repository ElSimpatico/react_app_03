import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useStyles } from './styles';
import { State } from 'src/shared';

export function Home(): ReactElement {
    const classes = useStyles();
    const [t] = useTranslation('common');

    const { name } = useSelector((state: State) => state.test);

    return (
        <div className={classes.wrapped}>
            <div>{t('welcome-react')}</div>
            <div>{'Home'}</div>
            <div>{`Test name of redux state: ${name}`}</div>
        </div>
    );
}
