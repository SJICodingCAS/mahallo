import React from 'react';
import './Performances.css'

function Performance({goToAlt, goToLevel2}){
    return (
        <div className="performance-page">
            <header className='performance-header'>
             <h1>Performances</h1>
             <p> Example of a location</p>
              <button className = 'back-button' onClick={goToAlt}>Back</button>
            </header>
        </div>
    );
};

export default Performance;