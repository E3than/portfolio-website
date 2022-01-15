import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import Services from './components/pages/Services';
//import Products from './components/pages/Products';
//import SignUp from './components/pages/SignUp';


function App() {
  return (
    <div className="App">

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
