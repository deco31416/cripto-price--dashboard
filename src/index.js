import React from 'react';
import ReactDOM from 'react-dom/client'; // Usa 'react-dom/client'
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root')); // Usa createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registrar o desregistrar service worker
// serviceWorker.unregister();
