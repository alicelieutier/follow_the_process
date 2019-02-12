import React from 'react';
// import './Navigation.css';

const Navigation = ({prev, next, nextSteps}) => (
    <div className="Navigation">
        <button onClick={prev}>Previous</button>
        {
            nextSteps.map((stepId) => (
                <button key={stepId} onClick={() => next(stepId)}>{`Go to ${stepId}`}</button>
            ))
        }
    </div>
)

export default Navigation;
