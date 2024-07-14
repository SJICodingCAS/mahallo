import React from 'react';
import './Level2.css'

function Level2({goToFounder,goToISH2,switchFloor}){
    return (
        <div className="level2-page">
            <header className='level2-header'>
             <h1>Level2</h1>
             <p>Level2</p>
             <button className='founder-button' onClick={goToFounder}>To Founder's hall</button>
             <button className='ish2-button' onClick={goToISH2}>To ISH level 2</button>
             <button className='switch-button' onClick={switchFloor}>Switch Floor</button>
            </header>
        </div>
    );
};

export default Level2;