import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
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
      <Home/>  
      </ThemeProvider>
    </StyledEngineProvider>
  </>
  );
}

export default App;
