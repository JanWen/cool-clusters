import './App.css';
import Main from './pages/Main';
import Manage from './pages/Manage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, red, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E382E',
    },
    secondary: {
      main: '#50C9CE',
    },
    tertiary: {
      main: '#72A1E5',
    },
    error: {
      main: red[400],
    },
    success: {
      main: green[400],
    },
    neutral: {
      main: grey[600],
    },
  },
});

function App() {

  useEffect(() => {
    Modal.setAppElement('.App');
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/manage/:clusterId" element={<Manage />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </div>
  );
}

export default App;
