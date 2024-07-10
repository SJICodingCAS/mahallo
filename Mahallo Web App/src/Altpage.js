import React from 'react';
import './Altpage.css'

function AltPage({goToHome}){
    return (
        <div className="alt-page">
            <header className='alt-header'>
             <h1>test</h1>
             <p> test</p>
              <button className = 'alt-button' onClick={goToHome}>Back</button>
            </header>
        </div>
    );
};

export default AltPage;