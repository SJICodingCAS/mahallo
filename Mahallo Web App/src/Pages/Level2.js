import React from 'react';
import './Level2.css'

function Level2({switchFloor}){
    return (
        <div className="level2-page">
            <header className='level2-header'>
             <h1>Level2</h1>
             <p>Level2</p>
              <button className='switch-button' onClick={switchFloor}>Switch Floor</button>
            </header>
        </div>
    );
};

export default Level2;