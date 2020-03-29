import React, { ReactElement } from 'react';
import { SpinnerProps } from './spinner-props';

import './styles.css';

export function Spinner({ size }: SpinnerProps): ReactElement {
    return (
        <div className={'wrapper'}>
            <div className={`spinner ${size ? `spinner-${size}` : ''}`} />
        </div>
    );
}
