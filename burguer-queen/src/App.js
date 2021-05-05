import React, { useEffect} from 'react'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import {Login} from './Components/Login'
import {Waiter} from './Components/Waiter'
import {Kitchen} from './Components/Kitchen'
import {Admin} from './Components/Admin'


function App() {

  // let [product,setProduct]=useState()

  let getData=async()=>{
    let url ='http://localhost:3000/product'
    let getFetchData= await fetch(url).then(resul=>resul.json())
    console.log(getFetchData)
  }
  useEffect(()=>{
    getData()
  },[]) 

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


