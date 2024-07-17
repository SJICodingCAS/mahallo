import React from 'react';
import './Canteen.css'

function Canteen({goToAlt}){
    return (
        <div className="canteen-page">
            <header className='canteen-header'>
              <button className = 'back-button' onClick={goToAlt}>Back</button>
              <div>
                <h1>canteen</h1>
                <p> Example of a location</p>
              </div>
            </header>
        </div>
    );
};

export default Canteen;