// import Home from "./Pages/Dashboard";
import './App.css';
import Home from './pages/Home';
import Success from './pages/Success';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import Error from './pages/Error';
import Details from './pages/Details';
import AuthenticationFailed from './pages/AuthenticationFailed';

const container = {
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    y: 500
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.2
    }
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      ease: 'easiInOut',
      duration: 0.8
    }
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":template" element={<Details />} />
        <Route path="error/:template" element={<Error />} />
        <Route path=":user/:repo" element={<Success />} />
        <Route path="failed/:repo" element={<AuthenticationFailed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
