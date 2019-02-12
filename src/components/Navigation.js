import React from 'react';
// import './Navigation.css';

const Navigation = ({prev, next, nextSteps, canGoBack}) => (
    <div className="Navigation">
        {canGoBack && (<button onClick={prev}>Previous</button>)} 
        {nextSteps.map(({id, title}) => (
            <button key={id} onClick={() => next(id)}>{title}</button>
        ))}
    </div>
)

export default Navigation;
