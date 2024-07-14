import React from 'react';
import './Block K.css'

function K({goToAlt}){
    return (
        <div className="K-page">
            <header className='K-header'>
             <h1>Block K</h1>
             <p> Example of a location</p>
              <button className = 'back-button' onClick={goToAlt}>Back</button>
            </header>
        </div>
    );
};

export default K;
