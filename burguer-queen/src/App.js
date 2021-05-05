import React from 'react'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  /*Link*/
} from "react-router-dom";

// import {getData} from './lib/data'
import {Login} from './Components/Login'
import {Waiter} from './Components/Waiter/Waiter'
import {Kitchen} from './Components/Kitchen'
import {Admin} from './Components/Admin'

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path='/waiter'>
         <Waiter />
        </Route>
        <Route path='/kitchen'>
         <Kitchen />
        </Route>
        <Route path='/admin'>
         <Admin />
        </Route>
        <Route path='/'>
         <Login />
        </Route>
      </Switch>
    </Router>   
  );
}

export default App;
