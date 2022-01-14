// import Home from "./Pages/Dashboard";
import './App.css';
import Home from './components/Home'
import Success from './components/Success'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';

function App() {
  return ( 
<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:user/:repo" element={<Success />} />
			</Routes>
		</BrowserRouter>
  );
}

export default App;
