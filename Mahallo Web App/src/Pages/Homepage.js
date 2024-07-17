import React from 'react';
import './Homepage.css';

function HomePage({goToAlt}){
    return(
        <div className="home-page">
            <header className='home-header'>
                <div className='logo-image'>logo</div>
                <h1>Welcome to SJI</h1>
                <p>Look forward to events such as live performances from our students, delicious food stalls and exhilarating games!</p>
                <button className='home-button' onClick={goToAlt}>Go to alt page</button>
            </header>
        </div>
    );

};


export default HomePage;