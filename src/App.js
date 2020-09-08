import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './components/Checkout'

function App() {
  return (
    //BEM convection 
    <Router>
      <div className="app">
      <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          
        </Switch>
       

      </div>
    </Router>
  );
}

export default App;
