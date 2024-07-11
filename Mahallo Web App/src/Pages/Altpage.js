import React from 'react';
import './Altpage.css'

function AltPage({goToHome, goToField, switchFloor}){
    return (
        <div className="alt-page">
            <header className='alt-header'>
             <h1>Main map page</h1>
             <p>This will contain the main map with all pins/icons</p>
              <button className = 'back-button' onClick={goToHome}>Back</button>
              <button className = 'field-button' onClick={goToField}>To Field</button>
              <button className='switch-button' onClick={switchFloor}>Switch Floor</button>
            </header>
        </div>
    );
};

/*
function AltPagetoField({, switchToHome}){
    return(
        <div className="alt-page">
        <header className='alt-header'>
         <h1>test</h1>
         <p> test</p>
          <button className = 'field-button' onClick={goToField}>To Field</button>
          <button className='switch-button' onClick={switchToHome}>Switch to home</button>
        </header>
    </div>
    );
}
*/

export {AltPage};