import React from 'react';
import './Founder hall.css'

function Founder({goToLevel2}){
    return (
        <div className="founder-page">
            <header className='founder-header'>
             <h1>Field</h1>
             <p> Example of a location</p>
              <button className = 'back-button' onClick={goToLevel2}>Back</button>
            </header>
        </div>
    );
};

export default Founder;