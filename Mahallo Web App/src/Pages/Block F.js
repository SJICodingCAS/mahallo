import React from 'react';
import './Block F.css'

function F({goToAlt}){
    return (
        <div className="F-page">
            <header className='F-header'>
             <h1>Block F</h1>
             <p> location</p>
              <button className = 'back-button' onClick={goToAlt}>Back</button>
            </header>
        </div>
    );
};

export default F;