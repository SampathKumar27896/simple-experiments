import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import Router from './routes.jsx';
import { Provider } from 'react-redux';
import Store from './Store.js';
import { ThemeProvider } from '@mui/material';
import theme from './Theme.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={Store}>
        <RouterProvider router={Router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
