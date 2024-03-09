import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage'
import { StyledEngineProvider } from '@mui/styled-engine';
import { ThemeProvider, createTheme } from '@mui/material';
import Signup from './components/Signup';
import Login from './components/Login';
import SearchResults from './components/SearchResults';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Professor from './components/Professor';

const muiTheme = createTheme({
  typography:{
    fontFamily: ['"Inter"', '"system-ui"'].join(','),
    }
  }
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/search-results",
    element: <SearchResults />,
  },
  {
    path: "/professor",
    element: <Professor />,
  },
]);

function App() {
  return (<>
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={muiTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
    </StyledEngineProvider>
  </>
  );
}

export default App;
