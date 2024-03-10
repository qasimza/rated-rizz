import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import { StyledEngineProvider } from '@mui/styled-engine';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from './routes/home/Home'
import Signup from './routes/Signup';
import Login from './routes/Login';
import SearchResults from './routes/SearchResults';
import ErrorPage from './routes/errors/ErrorPage';
import Professor from './routes/professor/Professor';

const muiTheme = createTheme({
  typography:{
    fontFamily: ['"Inter"', '"system-ui"'].join(','),
    }
  }
);

const router = createBrowserRouter([
  {
    path: "rated-rizz",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "rated-rizz/login",
    element: <Login />,
  },
  {
    path: "rated-rizz/signup",
    element: <Signup />,
  },
  {
    path: "rated-rizz/search-results",
    element: <SearchResults />,
  },
  {
    path: "rated-rizz/professor",
    element: <Professor />,
  },
  {
    path: "rated-rizz/*",
    element: <ErrorPage />,
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
