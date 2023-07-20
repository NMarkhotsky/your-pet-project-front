import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  media: {
    phone: "(min-width: 320px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1280px)",
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
