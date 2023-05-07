import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Platform from './components/Platform';
import ProblemSheet from './components/ProblemSheet';
import Success from './components/Success';
import React from 'react'
import CodePlayground from './components/CodePlayground';
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import { useState, useEffect } from 'react';
import FullscreenLoader from './components/key_components/Loader';
import Form from './Admin/Form';

function App() {
  const [loading, setLoading] = useState(false); // set to true

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <div>
      {loading ? <FullscreenLoader /> :
        <div>
          <Router>
            <Navbar text_color={'#dddddd'} background_color={'#171f27'} />
            {/* <Navbar/> */}
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route exact path='/' element={<ProblemSheet text_color={'#dddddd'} />} />
              <Route exact path={`/practice/:problem_unique_code`} element={<Platform />} />
              <Route exact path='/success' element={<Success />} />
              <Route exact path='/playground' element={<CodePlayground />} />
              <Route exact path='/post' element={<Form />} />
            </Routes>
            <Footer text_color={"#dddddd"} />
          </Router>
        </div>}
    </div>
  );
}

export default App;
