import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BrowserRouter from './providers/BrowserRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter />
  </React.StrictMode>,
);
