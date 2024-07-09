import React from 'react';
import { Link } from 'react-router-dom';


function AltPage(){
    return (
        <div className="alt-page">
            <h1>test</h1>
            <Link to ='/'>
                <button>Back</button>
            </Link>
        </div>
    );
};

export default AltPage;