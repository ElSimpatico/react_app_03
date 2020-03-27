import React, { ReactElement } from 'react';
import { CircularProgress } from '@material-ui/core';

import { useStyles } from './styles';

export function Spinner(): ReactElement {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <CircularProgress />
        </div>
    );
}
