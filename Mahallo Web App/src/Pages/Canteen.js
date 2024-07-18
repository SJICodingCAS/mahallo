import React from 'react';
import './Canteen.css'

function Canteen({goToAlt}){
    return (
        <div className="canteen-page">
            <header className='canteen-header'>
              <button className = 'back-button' onClick={goToAlt}>Back</button>
              <div>
                <h1>Canteen</h1>
              </div>

            <div class="canteen-bottom-banner">
              <div className="food-logo"></div>


              <div>
                  <p> © 2024 • SJI Coding & Technology </p>
              </div>
            </div>
            </header>
        </div>
    );
};

export default Canteen;