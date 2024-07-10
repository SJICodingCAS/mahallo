import React from 'react';
import './App.css';
import HomePage from './Homepage';
import AltPage from './Altpage';
import {useState} from 'react';


function App() {
  const [currentView, setCurrentView] = useState('Homepage');
  const renderView = () =>{
    switch(currentView){
      case 'Homepage' :
        return <HomePage goToAlt={() => setCurrentView('Altpage')} />;
      case 'Altpage' :
        return <AltPage goToHome={() => setCurrentView('Homepage')} />;
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
