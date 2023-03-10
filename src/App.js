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
// import Matrix from './theme_src/matrix.mp4'

function App() {
  // const videoRef = useRef(null);
    return (
      <>
        <Router>
          {/* <div className="video-container" id='myVideo'>
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            >
              <source src={Matrix} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
          <Navbar />
          {/* <Alert /> */}
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route exact path='/' element={<ProblemSheet />} />
            <Route exact path={`/practice/:problem_unique_code`} element={<Platform />} />
            <Route exact path='/success' element={<Success />} />
            <Route exact path='/playground' element={<CodePlayground />} />
          </Routes>
          <Footer/>
        </Router>
      </>
    );
  }

  export default App;
