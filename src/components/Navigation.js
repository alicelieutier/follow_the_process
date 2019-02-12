import React from 'react';
import {shuffled} from '../helpers.js'
import './Navigation.css';

const Navigation = ({prev, next, nextSteps, canGoBack}) => (
    <div className="Navigation">
        <div className="back">
            {canGoBack && (<button onClick={prev}>&larr; Back</button>)} 
        </div>
        <div className="forward">
            {shuffled(nextSteps).map(({id, title}) => (
                <button key={id} onClick={() => next(id)}>{title}</button>
            ))}
        </div>
    </div>
)

export default Navigation;
