import React from 'react';
import './Canteen.css'

function Canteen({goToAlt}){
    return (
        <div className="canteen-page">
            <header className='canteen-header'>
             <h1>canteen</h1>
             <p> Example of a location</p>
              <button className = 'back-button' onClick={goToAlt}>Back</button>
            </header>
        </div>
    );
};

export default Canteen;