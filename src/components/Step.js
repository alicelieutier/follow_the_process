import React from 'react';
import './Step.css';

import Navigation from './Navigation';

const Step = ({title, description, prev, next}) => (
    <div className="Step">
        <h1>{title}</h1>
        <p>{description}</p>
        <Navigation {...{prev, next}} />
    </div>
)

export default Step;
