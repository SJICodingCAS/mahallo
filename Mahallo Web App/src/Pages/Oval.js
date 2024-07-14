import React from 'react';
import './Oval.css'

function Oval({goToAlt}){
    return (
        <div className="oval-page">
            <header className='oval-header'>
             <h1>Oval</h1>
             <p> Example of a location</p>
              <button className = 'back-button' onClick={goToAlt}>Back</button>
            </header>
        </div>
    );
};

export default Oval;