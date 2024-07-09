import React from 'react';
import './App.css';
import HomePage from './Homepage.js';
import AltPage from './Altpage.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
 return (
  <Router>
    <div className = 'App'>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/alt" component={AltPage} />
      </Routes>
    </div>
    <HomePage />
  </Router>
 );
};

export default App;
