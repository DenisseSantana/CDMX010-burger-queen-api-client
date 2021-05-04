import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import {Viewlogin} from './Components/views/Viewlogin'
import {ViewWaiter} from './Components/views/ViewWaiter'
import {ViewKitchen} from './Components/views/ViewKitchen'
import {ViewAdmin} from './Components/views/ViewAdmin'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/waiter'>
         <ViewWaiter />
        </Route>
        <Route path='/kitchen'>
         <ViewKitchen />
        </Route>
        <Route path='/admin'>
         <ViewAdmin />
        </Route>
        <Route path='/'>
         <Viewlogin />
        </Route>
      </Switch>
    </Router>   
  );
}

export default App;
