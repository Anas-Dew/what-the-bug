import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Platform from './components/Platform';
import ProblemSheet from './components/ProblemSheet';
import Success from './components/Success';
import React from 'react'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ProblemSheet />} />
          <Route exact path='/practice' element={<Platform />} />
          <Route exact path='/success' element={<Success />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
