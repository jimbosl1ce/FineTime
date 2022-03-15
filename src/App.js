/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';

import WelcomeScreen from './pages/WelcomePage';
import SelectPage from './pages/SelectPage';

// App State
import MusicState from './context/MusicState';

function App() {

  return (
    <MusicState>
      <div className="navbar">
        <div className="logo">
          FineTime (logo)
        </div>
        <ul className="signup">
          <li>
            <a href="#">Sign up</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <section className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/cityselect" element={<SelectPage />} />
          </Routes>
        </BrowserRouter>
      </section>
    </MusicState>
  );
}

export default App;
