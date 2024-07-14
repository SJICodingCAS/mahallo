import React from 'react';
import './Track.css'

function Track({goToAlt}){
    return (
        <div className="track-page">
            <header className='track-header'>
             <h1>Track</h1>
             <p> Example of a location</p>
              <button className = 'back-button' onClick={goToAlt}>Back</button>
            </header>
        </div>
    );
};

export default Track;
