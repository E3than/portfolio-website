import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <h1> Hello World</h1>
    <Router>
      <NavBar />
      <Routes>
        <Route  exact path='/' />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
