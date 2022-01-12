import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <h1> Hello World</h1>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
