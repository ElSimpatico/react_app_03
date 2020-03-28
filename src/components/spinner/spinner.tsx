import React, { ReactElement, useEffect } from 'react';

import './styles.css';

export function Spinner({ size }: any): ReactElement {
    return (
        <div className={'wrapper'}>
            <div className={`spinner ${size ? `spinner-${size}` : ''}`} />
        </div>
    );
}
