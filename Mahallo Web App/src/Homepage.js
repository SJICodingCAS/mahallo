import React from 'react';
import './Homepage.css';

function HomePage({goToAlt}){
    return(
        <div className="home-page">
            <header className='home-header'>
                <h1>Website</h1>
                <p>Test</p>
                <button className='home-button' onClick={goToAlt}>Go to alt page</button>
            </header>
        </div>
    );

};


export default HomePage;