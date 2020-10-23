import React,{useState} from 'react';
import './App.css';

//Components
import NavBar from './components/NavBar';

//Pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';

import {Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
