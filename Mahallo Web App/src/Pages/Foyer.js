import React from 'react';
import './Foyer.css'

function Foyer({goToAlt}){
    return (
        <div className="foyer-page">
            <header className='foyer-header'>
             <h1>Foyer</h1>
             <p> Example of a location</p>
              <button className = 'back-button' onClick={goToAlt}>Back</button>
            </header>
        </div>
    );
};

export default Foyer;