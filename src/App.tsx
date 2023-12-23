import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
    
  );
}

export default App;
