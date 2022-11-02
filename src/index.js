import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NextUIProvider, createTheme } from '@nextui-org/react';

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {},
    space: {},
    fonts: {}
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider theme={theme}>
  <App />
</NextUIProvider>
);