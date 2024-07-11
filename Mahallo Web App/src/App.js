import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage';
import { AltPage } from './Pages/Altpage';
import Field from './Pages/Field';
import {useState} from 'react';
import Level2 from './Pages/Level2';


function App() {
  const [currentView, setCurrentView] = useState('Homepage');
/*  const [altPageView, setAltPageView] = useState('Field'); */

  const renderView = () =>{
    switch(currentView){
      case 'Homepage' :
        return <HomePage goToAlt={() => setCurrentView('Altpage')} />;
      case 'Altpage' :
        return <AltPage goToHome={() => setCurrentView('Homepage')} goToField={() => setCurrentView('Field')} switchFloor={()=>setCurrentView('Level2')}/>;
      case 'Field':
        return <Field goToAlt={() => setCurrentView('Altpage')} />;
      case 'Level2' :
        return <Level2 switchFloor={() => setCurrentView('Altpage')} />;
      default:
        return <HomePage goToAlt={() => setCurrentView('Altpage')} />;

    }
  };
  return (
    <div className="App">
      {renderView()}
    </div>
  );
};

export default App;
