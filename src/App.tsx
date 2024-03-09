import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage'
import { StyledEngineProvider } from '@mui/styled-engine';
import { ThemeProvider, createTheme } from '@mui/material';

const muiTheme = createTheme({
  typography:{
    fontFamily: ['"Inter"', '"system-ui"'].join(','),
    }
  }
);

function App() {
  return (<>
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={muiTheme}>
      <LandingPage/>  
      </ThemeProvider>
    </StyledEngineProvider>
  </>
  );
}

export default App;
