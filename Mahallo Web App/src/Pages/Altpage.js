import React from 'react';
import './Altpage.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function AltPage({goToHome,goToField,goToTrack,goToFoyer,goToCanteen,goToOval,goToISH1,goToF,goToK,goToPerformance, switchFloor}){
    return (
        <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
            <TransformComponent>
                <div className="alt-page">
                    <header className='alt-header'>
                        <h1>Main map page</h1>
                        <p>This will contain the main map with all pins/icons</p>
                        <button className = 'back-button' onClick={goToHome}>Back</button>
                        <button className = 'field-button' onClick={goToField}>To Field</button>
                        <button className = 'track-button' onClick={goToTrack}>To Track</button>
                        <button className = 'foyer-button' onClick={goToFoyer}>To Foyer</button>
                        <button className = 'canteen-button' onClick={goToCanteen}>To Canteen</button>
                        <button className = 'oval-button' onClick={goToOval}>To Oval</button>
                        <button className = 'ish1-button' onClick={goToISH1}>To ISH1</button>
                        <button className = 'F-button' onClick={goToF}>To F</button>
                        <button className = 'K-button' onClick={goToK}>To K</button>
                        <button className = 'performance-button' onClick={goToPerformance}>To Performance</button>
                        <button className='switch-button' onClick={switchFloor}>Switch Floor</button>
                    </header>
                </div>
            </TransformComponent>
        </TransformWrapper>
    );
};
export {AltPage};