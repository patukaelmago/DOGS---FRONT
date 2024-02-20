import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Form from './components/Form';
import Detail from './components/Detail';


function App() {
  return (
    <div className="App">
      
       
          <Route exact path="/" component={LandingPage } />
          <Route path="/home" component={Home } />
          <Route path="/dogs" component={Form } />
          <Route path="/detail/:id" component={Detail } />
        
         
    </div>
  );
}

export default App;