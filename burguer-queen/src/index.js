import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Viewlogin from './Components/views/Viewlogin'
import ViewWaiter from './Components/views/ViewWaiter'
import ViewKitchen from './Components/views/ViewKitchen'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
  <Router history={browserHistory}>
    <Route path="/" component={Viewlogin}></Route>
    <Route path="/waiter" component={ViewWaiter}></Route>
    <Route path="/kitchen" component={ViewKitchen}></Route>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
