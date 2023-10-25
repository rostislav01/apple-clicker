import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.scss";
import { AppProviders } from './appProviders';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders />
  </React.StrictMode>,
)
