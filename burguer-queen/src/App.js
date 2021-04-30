import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /*Link*/
} from "react-router-dom";

import {ViewKitchen} from "./Components/views/ViewKitchen"
import {ViewLogin} from "./Components/views/ViewLogin"
import {ViewWaiter} from "./Components/views/ViewWaiter"

import './App.css';


export default function App() {
    return (
    <Router>
      <Switch>
        <Route path="/login">
          <ViewLogin />
        </Route>
        <Route path="/kitchen">
          <ViewKitchen />
        </Route>
        <Route path="/waiter">
          <ViewWaiter />
        </Route>
      </Switch>
    </Router>

  );

}

//export default App;
