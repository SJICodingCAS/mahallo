import React from 'react';
import './App.css';
import {useState} from 'react';
import HomePage from './Pages/Homepage'
import { AltPage } from './Pages/Altpage';
import Field from './Pages/Field';
import Level2 from './Pages/Level2';
import F from './Pages/Block F';
import K from './Pages/Block K';
import Canteen from './Pages/Canteen';
import Founder from './Pages/Founder hall';
import Foyer from './Pages/Foyer';
import ISH1 from './Pages/ISH Lvl 1';
import ISH2 from './Pages/ISH Lvl 2';
import Oval from './Pages/Oval';
import Track from './Pages/Block F';
import Performance from './Pages/Performances';



function App() {
  const [currentView, setCurrentView] = useState('Homepage');
/*  const [altPageView, setAltPageView] = useState('Field'); */

  const renderView = () =>{
    switch(currentView){
      case 'Homepage' :
        return <HomePage goToAlt={() => setCurrentView('Altpage')} />;
      case 'Altpage' :
        return <AltPage goToHome={() => setCurrentView('Homepage')}
        goToField={() => setCurrentView('Field')}
        goToCanteen={()=>setCurrentView('Canteen')}
        goToF={() => setCurrentView('Block F')}
        goToK={() => setCurrentView('Block K')}
        goToOval={() => setCurrentView('Oval')}
        goToISH1={() => setCurrentView('ISH Lvl 1')}
        goToFoyer={() => setCurrentView('Foyer')}
        goToTrack={() => setCurrentView('Track')}
        goToPerformance={() => setCurrentView('Performances')}
        switchFloor={()=>setCurrentView('Level2')}/>;
      case 'Field':
        return <Field goToAlt={() => setCurrentView('Altpage')} />;
      case 'Level2' :
        return <Level2 switchFloor={() => setCurrentView('Altpage')}
        goToISH2={() => setCurrentView('ISH Lvl 2')}
        goToFounder={() => setCurrentView('Founder hall')} />;
      case 'Canteen':
        return <Canteen goToAlt={() => setCurrentView('Altpage')} />;
      case 'Block F':
        return <F goToAlt={() => setCurrentView('Altpage')} />;
      case 'Block K':
        return <K goToAlt={() => setCurrentView('Altpage')} />;
      case 'Oval':
        return <Oval goToAlt={() => setCurrentView('Altpage')} />;  
      case 'ISH Lvl 1':
        return <ISH1 goToAlt={() => setCurrentView('Altpage')} />;
      case 'Foyer':
        return <Foyer goToAlt={() => setCurrentView('Altpage')} />;
      case 'Track':
        return <Track goToAlt={() => setCurrentView('Altpage')} />;
      case 'ISH Lvl 2':
        return <ISH2 goToLevel2={() => setCurrentView('Level2')} />;
      case 'Founder hall':
        return <Founder goToLevel2={() => setCurrentView('Level2')} />;
      case 'Performances':
        return <Performance goToAlt={() => setCurrentView('Altpage')} />;
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
