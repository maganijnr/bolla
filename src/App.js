import React,{useState} from 'react';
import './App.css';

//Components
import NavBar from './components/NavBar';

//Pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import {Switch,Route } from 'react-router-dom';

function App() {
  const [toggle, setToggle] = useState(false);

   const navToggle = () => {
        setToggle(!toggle);
    }
  return (
    <div className="App">
     <NavBar navToggle={navToggle} />
      <Switch>
        <Route exact path='/' render={() => (
          <Home navToggle={navToggle} toggle={toggle}/>
        )} />
        <Route exact path='/signin' render={() => (
          <SignIn />
        )} />
         <Route exact path='/signup' render={() => (
          <SignUp />
        )}/>
      </Switch>      
    </div>
  );
}

export default App;
