import React from 'react';
import './Field.css'

function Field({goToAlt}){
    return (
        <div className="field-page">
            <header className='field-header'>
             <h1>Field</h1>
             <p> Example of a location</p>
              <button className = 'back-button' onClick={goToAlt}>Back</button>
            </header>
        </div>
    );
};

export default Field;
