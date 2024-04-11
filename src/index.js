import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import globalTheme from './themes/globalTheme';
import ProfileProvider from './providers/ProfileProvider/ProfileProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <BrowserRouter>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
