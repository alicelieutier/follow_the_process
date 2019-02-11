import React from 'react';
import './Step.css';

const Step = ({title, description}) => (
    <div className="Step">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
)

export default Step;
