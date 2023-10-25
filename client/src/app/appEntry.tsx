import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom'
import { appStore } from './appStore';
import { appRouter } from './appRouter';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={appStore}>
      <RouterProvider router={appRouter()} />
    </ReduxProvider>
   
  </React.StrictMode>,
)
