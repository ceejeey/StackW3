// import Home from "./Pages/Dashboard";
import './App.css';
import Home from './pages/Home';
import Success from './pages/Success';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Error from './pages/Error';
import Details from './pages/Details';
import AuthenticationFailed from './pages/AuthenticationFailed';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: red[500]
//     }
//   }
// });
function App() {
  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":template" element={<Details />} />
        <Route path="error/:template" element={<Error />} />
        <Route path=":user/:repo" element={<Success />} />
        <Route path="failed/:repo" element={<AuthenticationFailed />} />
      </Routes>
    </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
