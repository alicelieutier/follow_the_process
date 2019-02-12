import React from 'react';
// import './Navigation.css';

const Navigation = ({prev, next}) => (
    <div className="Navigation">
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
    </div>
)

export default Navigation;
