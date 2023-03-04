import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Platform from './components/Platform';
import ProblemSheet from './components/ProblemSheet';
import Success from './components/Success';
import React from 'react'
import CodePlayground from './components/CodePlayground';
import NotFound from './components/NotFound'
function App() {
  console.log(`I see you...
  
  If you would like to work on this project, hit me an email : 4hcblk5g@duck.com 
  
  or send me a text on IG@anasunofficial`);
  // const problem_name = "hi"
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route exact path='/' element={<ProblemSheet />} />
          <Route exact path={`/practice/:problem_unique_code`} element={<Platform />} />
          <Route exact path='/success' element={<Success />} />
          <Route exact path='/playground' element={<CodePlayground />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
