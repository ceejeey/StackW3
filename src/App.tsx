// import Home from "./Pages/Dashboard";
import './App.css';
import Home from './pages/Home';
import Success from './pages/Success';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import Error from './pages/Error';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":template" element={<Details />} />
        <Route path="error/:template" element={<Error />} />
        <Route path=":user/:repo" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
