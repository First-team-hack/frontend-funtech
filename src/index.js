import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import globalTheme from './themes/globalTheme';
import ProfileProvider from './providers/ProfileProvider/ProfileProvider';
import EventProvider from './providers/EventProvider/EventProvider';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <BrowserRouter>
        <EventProvider>
          <ProfileProvider>
            <ScrollToTop />
            <App />
          </ProfileProvider>
        </EventProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
