import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function HomePage(){
    return(
        <div className="home-page">
            <header className='home-header'>
                <h1>Website</h1>
                <p>Test</p>
                <Link to ='/alt'>
                    <button>Go to alt page</button>
                </Link>
            </header>
        </div>
    );

};


export default HomePage;