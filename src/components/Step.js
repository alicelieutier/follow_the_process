import React from 'react';
import './Step.css';

import Navigation from './Navigation';

const Step = ({title, description, navigation}) => (
    <div className="Step">
        <h1>{title}</h1>
        <p>{description}</p>
        <Navigation {...navigation} />
    </div>
)

export default Step;
